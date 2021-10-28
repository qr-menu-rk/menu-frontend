import styles from "../styles/EventItem.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import moment from 'moment'

export default function SingleCategory({category}) {
    console.log(category)
    const router = useRouter();
  const handleClick = (slug) => {
    router.push(`events/${slug}`);
  };

  return (
    <div className={styles.cart} onClick={() => handleClick(slug)}>
      <div className='relative item-detail'>
        <Image
            className={styles.img}
            src={category.image ? category.image[0].formats.medium.url : "/images/event-default.png"}
            layout={'fill'} objectFit={'contain'}
        />
      </div>

      <div className={styles.info}>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>
    </div>
  );
}
