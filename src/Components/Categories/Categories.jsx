import { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Category from "./Category";

const categoriesData = [
  { id: 1, name: "Phones", icon: "bx bx-mobile-alt" },
  { id: 2, name: "Computers", icon: "bx bx-desktop" },
  { id: 3, name: "Smart Watch", icon: "bx bxs-watch" },
  { id: 4, name: "Camera", icon: "bx bx-camera" },
  { id: 5, name: "Speakers", icon: "bx bx-speaker" },
  { id: 6, name: "Headphones", icon: "bx bx-headphone" },
];

export default function Categories() {
  const [categories, setCategories] = useState(categoriesData);

  return (
    <>
      <SectionHeader title={"Categories"} subtitle={"Brows By Categories"} hasSwiper />
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
        {categories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
    </>
  );
}
