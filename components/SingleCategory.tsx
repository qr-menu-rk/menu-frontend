import styles from "../styles/EventItem.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import {Category} from "../types/Category"

interface SingleCategory {
  category: Category
  businessID: number;
}

export default function SingleCategory({ category, businessID }: SingleCategory) {
  const router = useRouter();
  const handleClick = (slug: number) => {
      router.replace(`${businessID}/category/${slug}`);
  };
  
  return (
    <div className={styles.cart} key={category.id} id={category.CategorySlug} onClick={() => handleClick(category.id)}>
      <div className="relative item-detail">
        <Image
          className={styles.img}
          src={
            category.image
              ? category.image[0].formats.medium.url
              : "/images/event-default.png"
          }
          layout={"fill"}
          objectFit={"cover"}
        />
      </div>

      <div className={styles.info}>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>
    </div>
  );
}
