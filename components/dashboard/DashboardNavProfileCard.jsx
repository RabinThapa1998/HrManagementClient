import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardNavProfileCard = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/profile")} className="bg-white">
      <div className="rounded-md flex shadow-md py-1 px-8 ">
        <img
          src="pp.jpg"
          alt="profile"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex flex-col ml-4">
          <p className="font-medium text-lg text-sidebar">Rabin Thapa</p>
          <p className="text-xs font-light text-gray-400">Project Manager</p>
        </div>
      </div>
    </button>
  );
};

export default DashboardNavProfileCard;
