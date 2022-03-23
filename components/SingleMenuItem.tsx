import { useRouter } from "next/router";
import { Food } from "types/Food";
import Modal from "@/components/Modal"
import {useState} from "react";

interface SingleMenuItem {
  menuItem: Food;
}

export default function SingleMenuItem({ menuItem }: SingleMenuItem) {
  const router = useRouter();
  const handleClick = (slug: number) => {
    setShowModal(!showModal)
  };

  const [showModal, setShowModal] = useState(false)
  return (
      <>
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

        <Modal show={showModal} onClose={() => setShowModal(false)} title={menuItem.name}>
          <div>
            <img
                className="object-cover w-full max-h-60 rounded-lg"
                src={
                  menuItem.images
                      ? menuItem.images[0].formats.medium.url
                      : "/images/event-default.png"
                }
            />
          </div>
          <div className="ml-2 h-full">
            <h1 className="font-medium">{menuItem.name}</h1>
            <p className="text-orange-600 font-bold">
              {menuItem.price} {menuItem.currency}
            </p>
            <p className="text-clip overflow-auto h-44 text-black font-thin">{menuItem.description}</p>
          </div>
        </Modal>
      </>

  );
}
