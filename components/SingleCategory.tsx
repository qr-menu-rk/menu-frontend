import styles from "../styles/EventItem.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SingleCategory({ category, businessID }) {
  const router = useRouter();
  const handleClick = (slug: number) => {
      router.replace(`${businessID}/category/${slug}`);
  };

  return (
    <div className={styles.cart} id={category.slug} onClick={() => handleClick(category.id)}>
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
