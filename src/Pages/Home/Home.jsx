import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Product from "../../Components/Product/Product";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import CategoriesDiscount from "../../Components/CategoriesDiscount/CategoriesDiscont";
import Categories from "../../Components/Categories/Categories";
import FlashSales from "../../Components/FlashSales/FlashSales";

const categories = [
  { id: 1, name: "Phones", icon: "" },
  { id: 1, name: "Computers", icon: "" },
  { id: 1, name: "Smart Watch", icon: "" },
  { id: 1, name: "Camera", icon: "" },
  { id: 1, name: "Headphones", icon: "" },
  { id: 1, name: "Gaming", icon: "" },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <FlashSales />
      <div className="container mt-10">
        <CategoriesDiscount />
        <Categories />
      </div>

      <div className="container">
        <div className="grid grid-cols-4 grid-rows-2 gap-5">
          <div className="bg-slate-400 col-span-2 row-span-2 "></div>
          <div className="bg-slate-400 col-span-2 "></div>
          <div className="bg-slate-400 h-4"></div>
          <div className="bg-slate-400 "></div>
        </div>
      </div>

     
    </div>
  );
}
