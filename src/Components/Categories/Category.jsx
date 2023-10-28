import React, { useState } from "react";

export default function Category({ name, icon }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg py-6 border cursor-pointer hover:bg-red-500 hover:text-white transition-all">
      <i className={`${icon} text-3xl mb-4`}></i>
      <span>{name}</span>
    </div>
  );
}
