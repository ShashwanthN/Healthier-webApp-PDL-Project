import React from "react";
import Topbar from "../components/topbar";
import BentoBox from "../components/BentoBox";
import { Footprints, Flame, LucideActivitySquare, SunSnow } from "lucide-react";
import { MdDirectionsRun } from "react-icons/md";
import Weather from "../components/WeatherAPi";

function Home() {
  return (
    <div className="flex flex-col bg-bgPrimary md:flex-row w-full">
      <div className="md:flex hidden">
        <Topbar />  
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="text-5xl md:text-9xl p-4 px-10 font-bold text-bgAccent">
            Hello,{" "}
            <div className="text-lg text-bgTertiary md:text-3xl">
              Shashwanth.{" "}
              <div className="opacity-80 text-bgTertiary">
                Great day for a walk.
              </div>
            </div>
          </div>
          <div className="flex w-full p-6">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="p-6 hover:scale-105 transition-transform ease-in bg-bgTertiary border-bgAccent border justify-between flex flex-col py-8 gap-1 shadow-md rounded-sm">
                <div className="flex justify-evenly  text-bgPrimary items-center divide-x-2 divide-bgAccent ">
                  <div className="flex text-2xl items-center justify-start w-full md:text-3xl">
                    <Flame size={35} />
                    <span className="px-4 md:px-8 ">1000</span>
                  </div>
                  <div className="flex text-2xl items-center justify-end w-full md:text-3xl">
                    <LucideActivitySquare size={35} />
                    <span className="px-4 md:px-8 ">17.3</span>
                  </div>
                </div>
                <div className="flex mt-4 text-bgPrimary">
                  <Footprints size={35} />
                  <span className="pl-2 text-3xl md:text-4xl font-bold text-white">
                    <span className="">1743</span>
                    <span className="font-light text-lg md:text-2xl flex">
                      steps to go today <span className="md:hidden lg:flex">. . . . . . . . . <MdDirectionsRun /> . . . . . .</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="p-6 bg-bgSecondary hover:scale-105 transition-transform ease-in border border-dashed shadow-md text-bgAccent border-bgAccent rounded-sm">
                <div className="flex items-center">
                  <SunSnow size={100} />
                  <span className="text-4xl px-5 font-medium">
                    Sun with mild Snow
                    <div className="text-xl font-light text-bgTertiary"> better than yesterday!</div>
                    <div className="text-xl font-light text-bgTertiary  underline-offset-1">Utrecht, Netherlands</div>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="p-6">
          <BentoBox />
        </div>
      </div>
    </div>
  );
}

export default Home;
