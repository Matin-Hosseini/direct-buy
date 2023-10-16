import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesDiscount() {
  return (
    <section className="bg-black flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between px-8 lg:px-14 py-16  my-20">
      <div className="text-center lg:text-start">
        <h3 className="text-green-500">Categories</h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-[395px] lg:max-w-[760px] xl:max-w-[560px] font-bold text-white my-8">
          Enhance Your Music Experience
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-10 child:w-20 child:h-20 child:rounded-full child:bg-white child:flex child:flex-col child:justify-center child:items-center  ">
          <div>
            <span className="font-bold text-xl">23</span>
            <span className="text-sm">Days</span>
          </div>
          <div>
            <span className="font-bold text-xl">05</span>
            <span className="text-sm">Hours</span>
          </div>
          <div>
            <span className="font-bold text-xl">59</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div>
            <span className="font-bold text-xl">35</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
        <Link className="bg-green-600 rounded-lg text-white py-4 px-12 inline-block">
          Buy Now
        </Link>
      </div>
      <div>
        <img src="src/assets/images/products/jbl-speaker.png" alt="" />
      </div>
    </section>
  );
}
