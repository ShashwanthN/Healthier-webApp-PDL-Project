import React from "react";
import { Soup, Flame } from "lucide-react";

function CalorieStats() {
  return (
    <div className="h-full">
      <div className="bg-bgSecondary h-1/3 p-2 flex">
        <div>
          <h1 className="caloriescount">No.of calories:</h1>
          <br />
          <h2 className="icon">
            Day1:{" "}
            <span className="icon">
              <Soup size={32} />
            </span>
            520{" "}
            <span className="icon">
              <Flame size={32} />
            </span>
            780
          </h2>
          <h2 className="icon">
            Day2:{" "}
            <span className="icon">
              <Soup size={32} />
            </span>
            820{" "}
            <span className="icon">
              <Flame size={32} />
            </span>
            669
          </h2>
          <h2 className="icon">
            Day3:{" "}
            <span className="icon">
              <Soup size={32} />
            </span>
            800{" "}
            <span className="icon">
              <Flame size={32} />
            </span>
            700
          </h2>
          <h2 className="icon">
            Day4:{" "}
            <span className="icon">
              <Soup size={32} />
            </span>
            520{" "}
            <span className="icon">
              <Flame size={32} />
            </span>
            780
          </h2>
          <h2 className="icon">
            Day5:{" "}
            <span className="icon">
              <Soup size={32} />
            </span>
            820{" "}
            <span className="icon">
              <Flame size={32} />
            </span>
            669
          </h2>
        </div>
        <div className="target">
          <h1>
            <span className="Tcal">Total amount of calories burnt</span>
            <span className="count">
              <br />
              3598
            </span>
            <span>cal</span>
          </h1>
        </div>
      </div>
      <div className=" Ttarget bg-bgSecondary h-1/3 p-2 ">
        <h1>Today's Target</h1>
        <h1 className="Dcount">
          1550<span className="DCspan">cal</span>
        </h1>
      </div>
      <div className="bg-bgSecondary h-1/3 p-2 flex">
        <div className="Wtarget">
          <h1> Weekly Target</h1>
          <span>7500</span>
          <span className="DCspan">cal</span>
        </div>
        <div className="Wtarget">
          <h1>Weekly target you achieved</h1>
          <span>5500</span>
          <span className="DCspan">cal</span>
        </div>
      </div>
    </div>
  );
}

export default CalorieStats;
