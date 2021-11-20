import Layout from "@/components/Layout";
import {API_URL} from "@/config/index";
import SingleMenuItem from "@/components/SingleMenuItem";

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
    const { slug } = params;
    const data = await fetch(`${API_URL}/foods?food_categories.id=${slug}`);
    const res = await data.json();

    return {
        props: {
            res,
        },
    };
}
