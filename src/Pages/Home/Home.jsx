import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Product from "../../Components/Product/Product";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import CategoriesDiscount from "../../Components/CategoriesDiscount/CategoriesDiscont";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mt-10">
        <SectionHeader hasSwiper />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          <Product liked />
          <Product />
          <Product isNew/>
          <Product />
        </div>
        <CategoriesDiscount/>
      </div>
    </div>
  );
}
