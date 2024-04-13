import React from "react";
import Example from "./FriendsChart";
import { ArrowUp, ArrowRight } from "lucide-react";
import  CustomizedTables from "./Nurition";

function BentoBox() {
  return (
    <main className="flex flex-col md:flex-row w-full">
      <section className="grid grid-cols-1 md:grid-cols-4 w-full gap-4">
        <div className="p-6 border hover:scale-105 transition-transform ease-in border-bgAccent bg-bgSecondary rounded-sm flex-col flex gap-1 col-span-2 row-span-2">
          <Example />
          <div className="justify-center text-bgAccent flex">
            <span className="px-8 flex">
              <ArrowUp />
              Y-Axis: Calories
            </span>
            <span className="px-8 flex">
              <ArrowRight />
              X-Axis: Days
            </span>
          </div>
        </div>
        <div className="p-6 border border-bgAccent bg-bgTertiary flex-col flex gap-1 col-span-1 row-span-1">
          <div></div>
        </div>
        <div className="p-6 border flex-col border-bgAccent flex gap-1 col-span-1 row-span-1">
          hello
        </div>
        <div className=" rounded-sm  border flex-col border-bgAccent flex gap-1 col-span-2 row-span-1">
        <div><CustomizedTables/>
        <div className="italic text-xs pl-2 pt-1 text-textSecondary">
          *NOTE THAT THE PRICES MAY VARY
        </div>
        </div>
        </div>
      </section>
    </main>
  );
}

export default BentoBox;
