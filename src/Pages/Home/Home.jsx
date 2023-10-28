import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Product from "../../Components/Product/Product";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import CategoriesDiscount from "../../Components/CategoriesDiscount/CategoriesDiscont";
import Categories from "../../Components/Categories/Categories";
import FlashSales from "../../Components/FlashSales/FlashSales";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";

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
      <NewArrivals />
    </div>
  );
}
