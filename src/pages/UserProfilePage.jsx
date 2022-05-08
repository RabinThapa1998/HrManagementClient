import React from "react";
import DetailsCard from "../../components/userprofile/DetailsCard";
import ProfileCard from "../../components/userprofile/ProfileCard";

const UserProfilePage = () => {
  return (
    <div className="flex w-full items-center justify-around p-5">
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
