import { parseCookies } from "@/helpers/index";
import Layout from "@/components/Layout";
import {useRouter} from "next/router";

export default function Category({ res: object }) {
    const router = useRouter()
    return (
        <Layout>
            <div >
                <h1>Here is category nr: {router.query.slug}</h1>
            </div>
        </Layout>
    );
}

// export async function getStaticProps() {
//     const data = await fetch(`${API_URL}/businesses?_sort=date:ASC&_limit=4`);
//     const res: object = await data.json();
//
//     return {
//         props: { res },
//         revalidate: 1,
//     };
// }
