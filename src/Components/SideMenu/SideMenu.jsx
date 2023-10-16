import React from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div className="lg:border-r lg:pt-10 lg:pr-4">
      <ul className=" child:flex child:items-center child:justify-between space-y-4">
        {/* has sub */}
        <li className="relative group">
          <Link className="flex-1">Woman's Fashion</Link>
          <i className="fa-solid fa-angle-right"></i>

          {/* sub menu */}
          <div className="absolute z-50 w-32 left-full top-0 rounded-md bg-white shadow-sm p-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all child:block child:py-1 child:px-2 child:rounded-md child-hover:bg-violet-200 child-hover:text-violet-700 child:transition-all">
            <Link>Shoes</Link>
            <Link>Accessories</Link>
            <Link>Coats</Link>
          </div>
        </li>
        {/* has sub */}
        <li className="relative group">
          <Link className="flex-1">Men's Fashion</Link>
          <i className="fa-solid fa-angle-right"></i>

          {/* sub menu */}
          <div className="absolute z-50 w-32 left-full top-0 rounded-md bg-white shadow-sm p-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all child:block child:py-1 child:px-2 child:rounded-md child-hover:bg-violet-200 child-hover:text-violet-700 child:transition-all">
            <Link>Dresses</Link>
            <Link>Rings</Link>
            <Link>High Heels</Link>
          </div>
        </li>
        <li>
          <Link>Electronics</Link>
        </li>
        <li>
          <Link>Home & Lifestyle</Link>
        </li>
        <li>
          <Link>Medicine</Link>
        </li>
        <li>
          <Link>Sports & Outdoor</Link>
        </li>
        <li>
          <Link>Baby’s & Toys</Link>
        </li>
        <li>
          <Link>Groceries & Pets</Link>
        </li>
        <li>
          <Link>Health & Beauty</Link>
        </li>
      </ul>
    </div>
  );
}
