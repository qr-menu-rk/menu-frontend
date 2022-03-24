import styles from "../styles/EventItem.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { Category } from "../types/Category";
import { url } from "inspector";

interface SingleCategory {
  category: Category;
  businessID: number;
}

export default function SingleCategory({
  category,
  businessID,
}: SingleCategory) {
  const router = useRouter();
  const handleClick = (slug: number) => {
    router.replace(`${businessID}/category/${slug}`);
  };

  return (
    <div
      className="flex flex-col items-center justify-center max-w-sm mx-auto my-10 cursor-pointer"
      key={category.id}
      id={category.CategorySlug}
      onClick={() => handleClick(category.id)}
    >
      <div
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{
          backgroundImage: `url(${
            category.image
              ? category.image[0].formats.medium.url
              : "/images/event-default.png"
          })`,
        }}
      ></div>
      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {category.name}
        </h3>

        <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-ellipsis text-center text-gray-800 dark:text-gray-200">
            {category.description}
          </span>
          {/* <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">EXPLORE!</button> */}
        </div>
      </div>
    </div>
  );
}
