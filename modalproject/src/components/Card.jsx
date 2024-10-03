import React, { useState } from "react";
import { CardsData } from "../constant";
import CardItem from "./CardItem";
import NoData from "./NoData";

function Card() {
  const [card, setCard] = useState(CardsData);
  const [isShow, setIsShow] = useState(true);

  const removeItem = (id) => {
    setCard([...card.filter(item => item.id !== id)])
  }

  return (
    <div>
      <div className="flex justify-center mt-[50px]">
        <button
          className="bg-black px-6 rounded text-white"
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? "Hidden" : "Show"}
        </button>
      </div>

      {isShow && (
        
       card.length > 0 ? (
        <div className="grid grid-cols-3 gap-5 p-5">
          {card.map((item) => (
            <CardItem key={item.id} item={item} removeItem={() => removeItem(item.id)}/>
          ))}
        </div>
        ) : <NoData/>
      )}
    </div>
    
  );
}

export default Card;
