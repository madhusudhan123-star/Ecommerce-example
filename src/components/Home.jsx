import React from "react";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Cardlist, Loader } from "./";
import { Link } from "react-router-dom";

const Home = () => {
  var front = require("../utils/images/front-img.jpg");
  var sideimg = require("../utils/images/sideimg.png");
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchFromAPI(`products?limit=12`).then((data) => {
      setData(data);
    });
  }, []);
  if (data === null) {
    return <Loader />;
  }
  console.log(data);
  return (
    <div className="pt-24">
      <div className="h-screen m-5">
        <div className="flex h-full items-center justify-around">
          <img src={front} className="w-4/12 " alt="fireSpot" />
          <h1 className="text-6xl">Ecommerce Website</h1>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src={sideimg} />
      </div>
      <div className="w-full">
        <div className="bg-gray-100 m-5 h-32">
          <div className="flex flex-col justify-around h-full items-center">
            <ul className="flex w-full text-2xl justify-around">
              <Link to="about"> About</Link>
              <li>/</li>
              <Link to="Product/category">Product</Link>
              <li>/</li>
              <Link to="/">Home</Link>
            </ul>
            <button className="border-solid border text-2xl p-1 border-black">
              Stay in Touch
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <Cardlist data={data} />
      </div>
      <div className="w-full flex justify-center">
        <img src={sideimg} />
      </div>
      <div className="w-full">
        <div className="bg-gray-100 m-5 h-32">
          <div className="flex flex-col justify-around h-full items-center">
            <ul className="flex w-full text-2xl justify-around">
              <Link to="about">About</Link>
              <li>/</li>
              <Link to="Product/category">Product</Link>
              <li>/</li>
              <Link to="/">Home</Link>
            </ul>
            <button className="border-solid border text-2xl p-1 border-black">
              Stay in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
