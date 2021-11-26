import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import SingleCategory from "@/components/SingleCategory";
import styles from "@/styles/EventItem.module.css";
import { parseCookies } from "@/helpers/index";
import { FaSignInAlt } from "react-icons/fa";

export default function Home({ res, slug }) {
    return (
        <Layout>
            <div className={styles.gridContainer}>
                {res.map((category) => (
                    <SingleCategory category={category} businessID={slug}/>
                ))}
            </div>
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
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
