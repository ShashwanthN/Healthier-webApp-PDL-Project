import React from "react";
import { Soup, Flame } from "lucide-react";

function CalorieStats() {
  return (
    <div className="max-h-screen text-textPrimary overflow-hidden">
      <div className="bg-bgSecondary border w-full border-divider justify-between items-center  h-full mb-4 p-2 flex">
        <div>
          <div className="items-center flex text-textSecondary">
            <span className="">Daily target </span>
          </div>
          <div className="text-bgAccent justify-center flex text-5xl">
            2100 <span className="opacity-40 ">cal</span>
          </div>
        </div>
        <div className="">
          <div className="items-center  justify-end flex text-textSecondary">
            <span className="">Weekly target </span>
          </div>
          <div className="text-bgAccent  justify-end  flex text-5xl">
            14700 <span className="opacity-40 ">cal</span>
          </div>
        </div>
      </div>
      <div className="bg-bgSecondary border border-divider h-full mb-4 p-2 flex ">
        <h1 className="">Today's Target</h1>
        <h1 className="">
          1550<span className="">cal</span>
        </h1>
      </div>
      <div className="bg-bgSecondary border border-divider h-full mb-2 p-2 flex">
        <div className="">
          <h1> Weekly Target</h1>
          <span>7500</span>
          <span className="">cal</span>
        </div>
      </div>
    </div>
  );
}

export default CalorieStats;
