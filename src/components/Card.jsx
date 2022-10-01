import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/${item.id}`} className="">
      <div className=" bg-white w-80 h-auto py-5 flex flex-col items-center rounded-lg m-5 mx-10 text-black">
        <img
          src={item.image}
          alt={item.id}
          className="w-full h-72 rounded-lg p-5"
        />
        <div className="100%">
          <div className="">
            <h2 className="text-lg font-bold text-center">{item.title}</h2>
            <h2 className="text-xl text-center">${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
