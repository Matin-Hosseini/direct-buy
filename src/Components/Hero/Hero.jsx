import React from "react";

import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SideMenu from "../SideMenu/SideMenu";

export default function Hero() {
  return (
    <div className="container grid grid-cols-6">
      {/* left menu */}
      <div className="hidden lg:block">
        <SideMenu />
      </div>

      <div className="col-span-6 lg:col-span-5 mt-10 lg:ml-11">
        <Swiper className="child:h-[344px] overflow-hidden">
          <SwiperSlide>
            <Link
              to={"/product"}
              className="flex justify-between items-center bg-black text-white">
              <div className="pl-14">
                <h2 className="text-lg">iPhone 14 Series</h2>
                <h1 className="max-w-[290px] my-5 text-5xl leading-tight">
                  Up to 10% off Voucher
                </h1>
                <Link className="flex items-center gap-2">
                  <span className="underline">Shop Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>

              <div className="">
                <img
                  src="src/assets/images/swiper/iphone.png"
                  alt=""
                  className="g-100"
                />
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
