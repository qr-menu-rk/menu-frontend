import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import SingleCategory from "@/components/SingleCategory";
import SingleMenuItem from "@/components/SingleMenuItem";
import { Category } from "types/Category";
import { useState } from "react";
interface Home {
  res: Category;
  slug: number;
}
export default function Home({ res, slug }: Home) {
  const [view, setView] = useState<Boolean>(true);

  return (
    <Layout>
      <div className="w-full">
        <button
          className={`bg-neutral-700 p-3 w-1/2 border-r-2 ${
            view && "font-bold text-orange-600"
          }`}
          onClick={() => setView(true)}
        >
          Category View
        </button>
        <button
          className={`bg-neutral-700 p-3 w-1/2 ${
            !view && "font-bold text-orange-600"
          }`}
          onClick={() => setView(false)}
        >
          List View
        </button>
      </div>
      <div>
        {view
          ? res.map((category: Category) => (
              <SingleCategory category={category} businessID={slug} />
            ))
          : res.map((category: Category) => (
              <>
                <div>
                  <h1 className="font-bold m-2 ml-3 text-2xl">{category.name}</h1>
                  {category.foods.map((food) => (
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
