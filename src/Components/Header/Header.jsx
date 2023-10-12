import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const closeSideBarBtn = useRef();

  return (
    <header className="border-b py-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            className="hamburger-menu lg:hidden"
            onClick={() => setShowSideBar(true)}>
            <span className="hamburger-menu__line"></span>
          </div>
          <Logo />
        </div>
        {/* side bar */}
        <aside
          className={`fixed ${
            showSideBar ? "left-0" : "left-[-100%]"
          } transition-all top-0 h-full p-4 bg-gray-50`}>
          <div className="flex justify-between mb-5">
            <Logo />
            <button onClick={() => setShowSideBar(false)} ref={closeSideBarBtn}>
              <i className="fa fa-x"></i>
            </button>
          </div>
          <SearchBar />
          <ul className="my-3">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/sign-up"}>Sign Up</Link>
            </li>
          </ul>
        </aside>
        <ul className="hidden lg:flex justify-between items-center gap-12">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/sign-up"}>Sign Up</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <div className="hidden lg:block">
            <SearchBar />
          </div>
          <div className="flex items-center gap-4 ml-6">
            <Link to={"/whishlist"}>
              <img src="src/assets/SVG/Wishlist.svg" alt="" />
            </Link>
            <div>
              <img src="src/assets/SVG/cart.svg" />
            </div>

            {/* user profile */}
            <div
              className="cursor-pointer relative"
              onClick={() => setShowProfileOptions((prev) => !prev)}>
              <div className="bg-[#DB4444] rounded-full w-8 h-8">
                <img src="src/assets/SVG/user.svg" alt="" />
              </div>

              <div
                className={`absolute w-56 right-0 ${
                  showProfileOptions
                    ? "visible opacity-100 top-[110%]"
                    : "invisible opacity-0 top-[130%]"
                } px-4 pt-4 rounded-md bg-[#00000033] backdrop-blur-sm transition-all child:mb-3 child:text-white child:text-sm child:flex child:items-center child:gap-4 child-hover:text-red-500 child:transition-all`}>
                <Link to={"/account"}>
                  <img src="src/assets/SVG/user.svg" alt="" />
                  Manage My Account
                </Link>
                <Link to={"/orders"}>
                  <img src="src/assets/SVG/mallbag.svg" alt="" />
                  My Order
                </Link>
                <Link to={"/cancellations"}>
                  <img src="src/assets/SVG/cancel.svg" alt="" />
                  My Cancellations
                </Link>
                <Link to={"/reviews"}>
                  <img src="src/assets/SVG/reviews.svg" alt="" />
                  My Reviews
                </Link>
                <Link>
                  <img src="src/assets/SVG/logout.svg" alt="" />
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
