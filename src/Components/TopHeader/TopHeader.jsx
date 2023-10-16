import React from "react";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <div className="bg-black text-white py-4">
      <div className="container flex items-center justify-end w-full">
        <div className="text-center flex-1">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link>SHOP NOW</Link>
        </div>

        <div className="">English</div>
        <div></div>
      </div>
    </div>
  );
}
