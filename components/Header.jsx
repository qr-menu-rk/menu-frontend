import Link from "next/link";
import Search from "./Search";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function Header() {
  const router = useRouter();

  const fetchData = async () => {
    const res = await fetch(`${API_URL}/businesses/${router.query.slug}`);
    return res.json();
  };

  const { isLoading, error, data } = useQuery("repoData", fetchData);

  if (isLoading) return "";
  if (error) return false;

  return (
    <header>
      <Search placeholder={"Search anything"} />
        <div className="relative overflow-hidden shadow-lg cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500">
            <img className="object-cover w-full h-32 opacity-90"
                 alt={data.bussines_name}
                 src={
                     data.bussines_profile
                         ? data.bussines_profile.formats.medium.url
                         : "/images/event-default.png"
                 }/>

            <div className="absolute top-0 left-0 px-36 py-10">
                <Link
                    href={{
                        pathname: `/business/${router.query.slug}`,
                    }}
                >
                    <a className="mb-3 text-4xl font-semibold tracking-tight text-white">{data.bussines_name}</a>
                </Link>
            </div>
        </div>
    </header>
  );
}
