import styles from "../styles/EventItem.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

export default function SingleMenuItem({ menuItem }) {
    const router = useRouter();
    const handleClick = (slug: number) => {

    };

    return (
        <div className={styles.cart} id={menuItem.slug} onClick={() => handleClick(menuItem.id)}>
            <div className="relative item-detail">
                <Image
                    className={styles.img}
                    src={
                        menuItem.images
                            ? menuItem.images[0].formats.medium.url
                            : "/images/event-default.png"
                    }
                    layout={"fill"}
                    objectFit={"cover"}
                />
            </div>

            <div className={styles.info}>
                <h1>{menuItem.name}</h1>
                <p>{menuItem.description}</p>
                <p>Price: {menuItem.price} {menuItem.currency}</p>
            </div>
        </div>
    );
}