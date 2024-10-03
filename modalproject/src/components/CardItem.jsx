import React, { useState } from "react";
import Modal from "./Modal";

function CardItem({ item, removeItem }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="space-y-6 border rounded p-5">
      <div>
        <figure className="aspect-[1/1]">
          <img className="size-full object-cover" src={item.img} alt="" />
        </figure>
      </div>

      <div>
        <h1>{item.title}</h1>
      </div>

      <div>
        <p>{item.desc}</p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={openModal}
          className="bg-blue-400 px-4 py-1 rounded text-white"
        >
          Show Modal
        </button>
        <button
          onClick={removeItem}
          className="bg-red-400 px-4 py-1 rounded text-white"
        >
          Remove Item
        </button>
      </div>

      {showModal && <Modal item={item} openModal={openModal} />}
    </div>
  );
}

export default CardItem;
