import styles from "../styles/EventItem.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Food } from "types/Food";

interface SingleMenuItem {
  menuItem: Food;
}

export default function SingleMenuItem({ menuItem }: SingleMenuItem) {
  const router = useRouter();
  const handleClick = (slug: number) => {};

  return (
    <div
      className="flex flex-row border-2 border-transparent bg-neutral-700 rounded-lg m-3 h-44 p-2"
      key={menuItem.id}
      onClick={() => handleClick(menuItem.id)}
    >
      <div className="w-1/2 h-full">
        <img
          className="object-cover w-40 h-full rounded-lg"
          src={
            menuItem.images
              ? menuItem.images[0].formats.medium.url
              : "/images/event-default.png"
          }
        />
      </div>

      <div className="ml-2 w-1/2 h-full">
        <h1 className="font-medium">{menuItem.name}</h1>
        <p className="text-clip overflow-auto h-20 font-thin">{menuItem.description}</p>
        <p className="text-orange-600 font-bold">
          {menuItem.price} {menuItem.currency}
        </p>
      </div>
    </div>
  );
}
