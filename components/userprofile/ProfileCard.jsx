import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <img
        src="/pp.jpg"
        alt="profile pic"
        className="rounded-full w-40 h-40 object-cover shadow-md my-4"
      />
      <p className="text-2xl capitalize text-primary text-center">John Doe</p>
      <p className="text-sm  capitalize text-gray-400 text-center">
        project manager
      </p>
    </div>
  );
};

export default ProfileCard;
