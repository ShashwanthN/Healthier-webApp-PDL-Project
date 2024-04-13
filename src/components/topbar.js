import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiFillLike, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  FlameIcon,
  HeartPulse,
  LogOut,
  LucideFlame,
  LucideHome,
  LucidePersonStanding,
  User,
} from "lucide-react";
import { MdSick } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="w-16 min-h-[100vh] border-r border-gray-light drop-shadow-md text-bgAccent bg-bgSecondary sticky transition-colors duration-500 ease-in flex flex-col items-center justify-between">
      <div className=" text-bgAccent bg-bgSecondary sticky transition-colors duration-500 p-2 ease-in flex flex-col items-center justify-between">
        <div className="py-4 hover:scale-110  transition-all duration-500">
          <Link to="/Home">
            <LucideHome size={35} />
          </Link>
        </div>
        <div className="py-4 hover:scale-110 transition-all duration-500">
          <MdSick size={33} />
        </div>
        <div className="py-4 hover:scale-110 transition-all duration-500">
          <HeartPulse size={35} />
        </div>
        <div className="py-4 hover:scale-110 transition-all duration-500">
          <FlameIcon size={35} />
        </div>
      </div>
      <div>
        <div className="py-4 hover:scale-110 transition-all duration-500">
         <Link to="/Register"> <User size={35} /></Link>
        </div>
        <div className="py-4 hover:scale-110 transition-all duration-500">
          <Link to="/">
            <LogOut size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
