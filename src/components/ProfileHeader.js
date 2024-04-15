import React from "react";
import user from "../assets/user.jpg";
import banner from "../assets/Banner.jpg"

function ProfileHeader() {
  return (
    <div className="h-1/3 flex justify-between items-end relative">
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.5)), url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          maskImage:
            "linear-gradient(to top, transparent, rgba(0,0,0,0.5))",
        }}
      ></div>
      <div className="z-10 align-text-bottom text-4xl font-mono text-textPrimary pb-2 pl-4 relative">
        Shashwanth N
      </div>
      <img
        className="z-10  h-44 rounded-l-full border-2 border-divider"
        src={user}
        alt="User"
      />
    </div>
  );
}

export default ProfileHeader;
