import styles from "../styles/Header.module.css";
import Link from "next/link";
import Search from "./Search";
import {API_URL} from "@/config/index";
import {useRouter} from "next/router";
import {useQuery} from "react-query";

export default function Header() {
    const router = useRouter();

    const fetchData = async () => {
        const res = await fetch(`${API_URL}/businesses/${router.query.slug}`)
        return res.json();
    }

    const { isLoading, error, data } = useQuery('repoData', fetchData)
    
    if (isLoading) return ''
    if (error) return false

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={{
            pathname: `/business/${router.query.slug}`
        }}>
          <a>{data.bussines_name}</a>
        </Link>
      </div>
      <Search placeholder={"Search anything"} />
    </header>
  );
}
