import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeader({ hasSwiper }) {
  return (
    <div className="mb-[60px]">
      <div className="text-red-500 flex items-center gap-4 mb-5">
        <span className="inline-block bg-red-500 w-5 h-10 rounded-md"></span>
        <h2 className="font-bold">This Month</h2>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="font-bold text-3xl tracking-wider">
          Best Selling Products
        </h3>
        {hasSwiper ? (
          <div className="flex items-center gap-2 child:w-12 child:h-12 child:rounded-full child:text-2xl child:flex child:items-center child:justify-center child:bg-neutral-100 child:cursor-pointer">
            <div>
              <i class="bx bx-left-arrow-alt"></i>
            </div>
            <div>
              <i class="bx bx-right-arrow-alt"></i>
            </div>
          </div>
        ) : (
          <Link className="px-12 py-4 text-white bg-red-500 rounded-lg">
            View All
          </Link>
        )}
      </div>
    </div>
  );
}
