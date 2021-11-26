import Layout from "@/components/Layout";
import {API_URL} from "@/config/index";
import SingleMenuItem from "@/components/SingleMenuItem";
import {log} from "util";

export default function Category({ res: object }) {
    return (
        <Layout>
            {object.map((menuItem) => (
                <SingleMenuItem menuItem={menuItem} />
            ))}
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    const { categoryID, slug } = params;
    const data = await fetch(`${API_URL}/foods?food_categories.id=${categoryID}&food_categories.business=${slug}`);
    const res = await data.json();

    return {
        props: {
            res,
        },
    };
}
