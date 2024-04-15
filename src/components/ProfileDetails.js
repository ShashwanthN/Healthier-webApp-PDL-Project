import React, { useState } from "react";
import { Dna, Pencil, CalendarDays, Ruler, Weight } from "lucide-react";

function ProfileDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(19);
  const [height, setHeight] = useState("6'12");
  const [weight, setWeight] = useState("55");

  const handleEdit = (field) => {
    setIsEditing(field);
  };

  const isValidHeight = (value) => {
    const heightValue = parseInt(value.replace("'", ""), 10);
    return heightValue >= 50 && heightValue <= 300 && /^\d+'\d+"$/.test(value);
  };

  const isValidWeight = (value) => {
    const weightValue = parseInt(value.replace("Kg", ""), 10);
    return weightValue >= 20 && weightValue <= 200 && /^\d+\s?Kg$/.test(value);
  };

  const handleSave = (field, value) => {
    let isValid = true;
    let errorMessage = "";

    switch (field) {
      case "gender":
        setGender(value);
        break;
      case "age":
        isValid = /^\d+$/.test(value);
        setAge(isValid ? value : age);
        errorMessage = "Age should be a number.";
        break;
      case "height":
        isValid = isValidHeight(value);
        setHeight(isValid ? value : height);
        errorMessage = "Height should be between 50 and 300 cm.";
        break;
      case "weight":
        isValid = isValidWeight(value);
        setWeight(isValid ? value : weight);
        errorMessage = "Weight should be between 20 and 200 kg.";
        break;
      default:
        break;
    }
    setIsEditing(false);

    if (!isValid) {
      alert(`Invalid input: ${errorMessage}`);
    }
  };

  return (
    <div className="text-textPrimary w-full font-bold text-2xl ">
      <div className="flex  items-center justify-between">
        {/* Gender */}
        <div className="w-full p-3 mb-0 items-center">
          {isEditing === "gender" ? (
            <div className="relative flex items-center">
              <button
                className="bg-bgPrimary text-textPrimary py-2 px-4 rounded inline-flex items-center"
                onClick={() => setIsEditing("gender")}
              >
                <span className="pr-2">{gender}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isEditing === "gender" && (
                <div className="absolute mt-2 w-full bg-bgPrimary rounded-md shadow-lg z-10">
                  {["Male", "Female", "Other"].map((option) => (
                    <button
                      key={option}
                      className="block w-full text-left text-lg font-medium px-4 py-2 text-textPrimary hover:bg-bgAccent hover:text-bgPrimary"
                      onClick={() => {
                        setGender(option);
                        handleSave("gender", option);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex bg-bgPrimary border border-borderCol p-5 rounded-sm ">
              <span className="pr-3 text-bgAccent">
                <Dna size={30} />{" "}
              </span>
              <div className="text-textPrimary">{gender}</div>
              <div className="flex ml-auto items-center opacity-30 hover:opacity-100">
                <button onClick={() => handleEdit("gender")}>
                  <Pencil size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Age */}
        <div className="w-full p-3 mb-0 items-center">
          {isEditing === "age" ? (
            <div className="relative flex items-center">
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                onBlur={() => handleSave("age", age)}
                autoFocus
                className="bg-bgPrimary text-textPrimary py-2 px-4 rounded inline-flex items-center w-full"
              />
            </div>
          ) : (
            <div className="flex bg-bgPrimary border border-borderCol p-5 rounded-sm ">
              <span className="pr-3 text-bgAccent">
              <CalendarDays size={30}/>{"  "}
              </span>
              <div className=" text-textPrimary">{age}</div>
              <div className="flex ml-auto items-center opacity-30 hover:opacity-100">
                <button onClick={() => handleEdit("age")}>
                  <Pencil size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Height */}
      <div className="flex items-center justify-between">
        <div className="w-full p-3 mb-0 items-center">
          {isEditing === "height" ? (
            <div className="relative flex items-center">
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                onBlur={() => handleSave("height", height)}
                autoFocus
                className="bg-bgPrimary text-textPrimary py-2 px-4 rounded inline-flex items-center w-full"
              />
            </div>
          ) : (
            <div className="flex bg-bgPrimary border border-borderCol p-5 rounded-sm ">
              <span className="pr-3 text-bgAccent">
              <Ruler size={30} />{" "}
              </span>
              <div className=" text-textPrimary">{height}</div>
              <div className="flex ml-auto items-center opacity-30 hover:opacity-100">
                <button onClick={() => handleEdit("height")}>
                  <Pencil size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Weight */}
        <div className="w-full p-3 mb-0 items-center">
          {isEditing === "weight" ? (
            <div className="relative flex items-center">
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                onBlur={() => handleSave("weight", weight)}
                autoFocus
                className="bg-bgPrimary text-textPrimary py-2 px-4 rounded inline-flex items-center w-full"
              />
            </div>
          ) : (
            <div className="flex bg-bgPrimary border border-borderCol p-5 rounded-sm ">
              <div className="pr-3 text-bgAccent">
              <Weight size={30}/>{" "}
              </div>
              <div className="text-textPrimary">{weight}</div>
              <div className="ml-auto flex items-center opacity-30 hover:opacity-100">
                <button onClick={() => handleEdit("weight")}>
                  <Pencil size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 

export default ProfileDetails;
