import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetTheme } from "../redux/theme";
import {
  FlameIcon,
  HeartPulse,
  LogOut,
  LucideFlame,
  LucideHome,
  MoonStar,
  LucidePersonStanding,
  User,
  Sun,
} from "lucide-react";
import { MdSick } from "react-icons/md";

const Topbar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const handleTheme = () => {
    const themeValue = theme === "light" ? "dark" : "light";
    dispatch(SetTheme(themeValue));
  };

  return (
    <div
      className={`w-16 min-h-[100vh] ${
        theme === "light" ? "border-gray-light" : "border-divider"
      } border-r drop-shadow-md text-bgAccent bg-bgSecondary sticky transition-colors duration-500 ease-in flex flex-col items-center justify-between`}
    >
      <div className=" text-bgAccent bg-bgSecondary sticky transition-colors duration-500 p-2 ease-in flex flex-col items-center justify-between">
        <div className="py-4 hover:scale-110  transition-all duration-500">
          <Link to="/">
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
        <div className="py-4 hover:scale-110  transition-all duration-500">
          <button onClick={() => handleTheme()}>
            {theme === "light" ? <MoonStar size={35} /> : <Sun size={35} />}
          </button>
        </div>
      </div>
      <div>
        <div className="py-4 hover:scale-110 transition-all duration-500">
          <Link to="/Profile">
            {" "}
            <User size={35} />
          </Link>
        </div>
        <div className="py-4 hover:scale-110 transition-all duration-500">
          <Link to="/Login">
            <LogOut size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
