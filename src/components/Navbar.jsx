import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Product } from ".";

const Navbar = () => {
  const logo = require("../utils/images/logo.png");
  const [cat, setCat] = useState(null);
  useEffect(() => {
    fetchFromAPI(`products/categories`).then((cat) => {
      setCat(cat);
    });
  }, []);

  return (
    <div className="flex absolute w-full flex-col items-center  justify-center bg-transparent">
      <div>
        <img src={logo} className="w-28" />
      </div>
      <div>
        <div className="flex w-80 justify-around text-3xl ">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to={"Product/category"}>
            <h1>Product</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
