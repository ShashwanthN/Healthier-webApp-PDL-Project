import React from "react";
import "../assets/profile.css";
import ProfileHeader from "../components/ProfileHeader";
import ProfileDetails from "../components/ProfileDetails";
import ProfileDescription from "../components/ProfileDescription";
import CalorieStats from "../components/CalorieStats";
import Topbar from "../components/topbar";

function Profile() {
  return (
    <div className="justify-between bg-bgPrimary  max-h-screen lg:flex bg-white">
      <div className="md:flex hidden">
        <Topbar />
      </div>
      <div className="justify-between bg-bgPrimary max-h-dvh flex bg-white">
        <div className="bg-bgSecondary w-1/3  ml-4 mt-4 mb-4 mr-4 rounded-md border-divider border">
          <div className="">
            <ProfileHeader />
            <ProfileDescription />
            <ProfileDetails />
          </div>
        </div>
        <div className="bg-bgPrimary w-1/3 mt-4 lg:flex-row mr-4 justify-between ">
          <CalorieStats />
        </div>
        <div className="Ttarget bg-bgPrimary mr-4 mt-4 mb-4 w-1/3">
          <div className="h-full">
          <div className="mt-4 mb-4 h-2/3 bg-bgSecondary">
          </div>
          <div className="">

          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Profile;
