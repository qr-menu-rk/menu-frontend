import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import SingleCategory from "@/components/SingleCategory";
import styles from "@/styles/EventItem.module.css";
import { parseCookies } from "@/helpers/index";
import { FaSignInAlt } from "react-icons/fa";
import { Category } from "types/Category";
interface Home {
    res: Category,
    slug: number
}
export default function Home({ res, slug }: Home) {
    return (
        <Layout>
            <div className={styles.gridContainer}>
                {res.map((category: Category) => (
                    <SingleCategory category={category} businessID={slug}/>
                ))}
            </div>
        </Layout>
    );
}

export async function getServerSideProps({ params }: any) {
    const { slug } = params;
    const data = await fetch(`${API_URL}/food-categories?business.id=${slug}`);
    const res = await data.json();

    return {
        props: {
            res,
            slug,
        },
    };
}
