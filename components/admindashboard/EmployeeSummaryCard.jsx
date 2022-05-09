import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeSummaryCard = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-md flex flex-col px-5 py-3 mb-5 mt-10 relative">
      <div className="flex justify-start ">
        <h3 className="text-sidebar text-2xl font-extrabold">
          Employee <span className="text-gray-400"> 189</span>
        </h3>
      </div>
      <button
        className="bg-sidebar px-3 py-2 text-center w-1/5 text-white rounded-full text-xl font-medium absolute bottom-5 right-5"
        onClick={() => navigate("/addnewemployee")}
      >
        Add a new employee
      </button>
      <div className="flex my-5">
        <div className="flex rounded-md bg-gray-100 justify-around px-2 py-1">
          <div className="flex flex-col px-8 items-center">
            <p className="font-medium text-green-500 text-center text-base">
              At office
            </p>
            <div className="flex justify-center items-center w-full">
              <div className="mr-1">
                <img src="/paperclip.png" alt="img" className="h-6 w-6 " />
              </div>
              <p className="text-xl font-medium">180</p>
            </div>
          </div>
          <div className="flex flex-col px-8 items-center border-l-2">
            <p className="font-medium text-red-500 text-center text-base">
              At Leave
            </p>
            <div className="flex justify-center items-center w-full">
              <div className="mr-1">
                <img src="/pin.png" alt="img" className="h-6 w-6 " />
              </div>
              <p className="text-xl font-medium">8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSummaryCard;
