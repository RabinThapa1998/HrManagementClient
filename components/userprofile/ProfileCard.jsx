import React from "react";

const ProfileCard = ({ userData }) => {
  const { firstName, lastName, image } = userData;
  return (
    <div className="flex flex-col items-center w-full">
      <img
        src={image}
        alt="profile pic"
        className="rounded-full w-40 h-40 object-cover shadow-md my-4"
      />
      <p className="text-2xl capitalize text-primary text-center">
        {firstName} {lastName}
      </p>
      {/* <p className="text-sm  capitalize text-gray-400 text-center">
        project manager
      </p> */}
    </div>
  );
};

export default ProfileCard;
