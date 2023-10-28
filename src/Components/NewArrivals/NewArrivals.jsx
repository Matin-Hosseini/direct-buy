import { Link } from "react-router-dom";
import SectionHeader from "./../SectionHeader/SectionHeader";
import SingleArrival from "./SingleArrival";
import { useState } from "react";

const arrivalsData = [
  {
    id: 1,
    img: "ps-5.png",
    title: "Play Station 5",
    caption: "Black and White version of the PS5 coming out on sale.",
    to: "#",
  },
  {
    id: 2,
    img: "woman.png",
    title: "Women’s Collections",
    caption: "Featured woman collections that give you another vibe.",
    to: "#",
  },
  {
    id: 3,
    img: "amazon-speaker.png",
    title: "Speakers",
    caption: "Amazon wireless speakers",
    to: "#",
  },
  {
    id: 4,
    img: "perfume.png",
    title: "Perfume",
    caption: "GUCCI INTENSE OUD EDP",
    to: "#",
  },
];

export default function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState(arrivalsData);
  return (
    <>
      <div className="container my-10">
        <SectionHeader title={"Featured"} subtitle={"New Arrival"} />

        <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-5 child:bg-black child:relative child:flex child:items-center">
          <div className="lg:col-span-2 justify-center row-span-2">
            <SingleArrival {...newArrivals[0]} />
          </div>
          <div className="lg:col-span-2 justify-end p-0">
            <SingleArrival {...newArrivals[1]} />
          </div>
          <div className=" justify-center py-8">
            <SingleArrival {...newArrivals[2]} />
          </div>
          <div className=" justify-center py-8 ">
            <SingleArrival {...newArrivals[3]} />
          </div>
        </div>
      </div>
    </>
  );
}
