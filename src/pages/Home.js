import React from "react";
import Topbar from "../components/topbar";
import BentoBox from "../components/BentoBox";
import { Footprints } from "lucide-react";

function Home() {
  return (
    <div className="">
      <div className="absolute">
        <Topbar />
      </div>
      <div className="pl-10 flex justify-between w-full h-3/6">
        <div className="text-9xl  p-4 px-10 font-bold text-bgAccent">
          Hello, <div className="text-3xl">Shashwanth.</div>
        </div>
        <div className="flex w-3/4 p-6">
          <section className="grid grid-cols-2 w-full gap-4">
            <div className="p-6 bg-bgAccent shadow-md rounded-md flex-col flex gap-1 col-span-1 row-span-1">
              <Footprints size={50} color="#ffffff" />
            </div>
            <div className="p-6 flex-col bg-bgSecondary border shadow-md border-bgAccent flex gap-1 rounded-md col-span-1 row-span-1">
              hello
            </div>
          </section>
        </div>
      </div>
      <div className="pl-20 flex-row flex">
        <BentoBox />
      </div>
    </div>
  );
}

export default Home;
