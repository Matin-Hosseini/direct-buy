import React from "react";
import Stars from "../Stars/Stars";
import { Link } from "react-router-dom";

export default function Product({ liked, isNew }) {
  return (
    <div>
      {/* image */}
      <div className="bg-neutral-100 px-10 py-9 flex items-center justify-center relative mb-4 rounded-lg overflow-hidden group">
        <Link to={"/product"}>
          <img src="src/assets/images/products/the-north-coat.png" alt="" />
        </Link>
        <div
          className={`absolute right-3 top-3 bg-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-lg ${
            liked && "bg-red-500 text-black lg:opacity-100"
          } hover:bg-red-500 hover:text-white transition-all lg:opacity-0 group-hover:opacity-100`}>
          <i class="bx bx-heart"></i>
        </div>

        <button className="absolute bottom-0 lg:bottom-[-100%] group-hover:lg:bottom-0 transition-all duration-300 right-0 left-0 h-10 bg-black text-white flex items-center justify-center gap-2">
          <i class="bx bx-cart-add text-2xl"></i>
          Add To Cart
        </button>

        <div className="absolute top-3 left-3 child:py-1 child:px-3 child:rounded-md child:text-sm  child:text-white flex gap-2 child:flex child:items-center child:justify-center">
          {isNew && <div className="bg-green-500">NEW</div>}
          <div className="bg-red-500">-20%</div>
        </div>
      </div>
      {/* content */}
      <div>
        <h2 className="font-bold ">
          <Link>The northCoat</Link>
        </h2>
        <div className="my-2 flex items-center gap-3">
          <span className="text-red-500">$260</span>
          <span className="text-gray-600">$360</span>
        </div>
        <div className="flex items-center gap-2">
          <Stars />
          <span className="text-gray-600">(65)</span>
        </div>
      </div>
    </div>
  );
}
