import React from "react";

export default function SearchBar() {
  return (
    <>
      <form className="bg-gray-100 rounded-md flex items-center gap-4 px-3 py-2 ml-auto">
        <input
          type="text"
          className="bg-transparent focus:border-none focus:outline-none text-sm w-auto"
          placeholder="what are you looking for"
        />
        <button className="cursor-pointer">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>
  );
}
