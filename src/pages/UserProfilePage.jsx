import React from "react";
import DetailsCard from "../../components/userprofile/DetailsCard";
import ProfileCard from "../../components/userprofile/ProfileCard";

const UserProfilePage = () => {
  return (
    <div className="flex w-full items-center justify-around p-5 relative mt-10">
      <h2 className="text-2xl font-semibold text-sidebar absolute -top-5 left-10">
        Profile
      </h2>
      <div className="h-auto w-3/4 rounded-md shadow-md bg-white">
        <DetailsCard />
      </div>
      <div className="h-auto w-1/5 rounded-md shadow-md bg-white self-start mt-11 p-4">
        <ProfileCard />
      </div>
    </div>
  );
};

export default UserProfilePage;
