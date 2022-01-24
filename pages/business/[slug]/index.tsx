import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import SingleCategory from "@/components/SingleCategory";
import SingleMenuItem from "@/components/SingleMenuItem";
import styles from "@/styles/EventItem.module.css";
import { parseCookies } from "@/helpers/index";
import { FaSignInAlt } from "react-icons/fa";
import { Category } from "types/Category";
import { useState } from "react";
import { log } from "util";
interface Home {
  res: Category;
  slug: number;
}
export default function Home({ res, slug }: Home) {
  const [view, setView] = useState<Boolean>(true);

  return (
    <Layout>
      <div>
        <button className="btn btn-secondary" onClick={() =>  setView(true)}>Category</button>
        <button className="btn btn-secondary" onClick={() =>   setView(false)}>List</button>
      </div>
      <div className={styles.gridContainer}>
        {view
          ? res.map((category: Category) => (
              <SingleCategory category={category} businessID={slug} />
            ))
          : res.map((category: Category) => (
              <>
                <div>
                  <h1>{category.name}</h1>
                  {category.foods.map((food, index) => (
                    <SingleMenuItem menuItem={food} />
                  ))}
                </div>
              </>
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
