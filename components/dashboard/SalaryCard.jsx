import React from "react";

const SalaryCard = () => {
  return (
    <div className="shadow-md rounded-md w-2/3 h-auto bg-white p-3 relative">
      <h3 className="text-3xl text-sidebar tracking-tight font-semibold">
        Salary
      </h3>
      <div className="flex">
        <div className="border rounded-md font-medium capitalize my-3 p-3">
          <div className="my-2">
            <p className="text-gray-600">payment date:</p>
            <p className="">2022/5/6</p>
          </div>
          <div className="my-2">
            <p className="text-gray-600">payment for:</p>
            <p className="">2022/5/6</p>
          </div>
        </div>
        <div className="my-3 border rounded-md ml-4 p-3">
          <p className="text-gray-600">Amount:</p>
          <p className="text-3xl font-bold tracking-tighter">
            <small>Rs.</small>1,50,000/-
          </p>
        </div>
        <div className="font-medium capitalize absolute bottom-2 right-5">
          <div className="my-5">
            <p className="underline">Monthly Salary:</p>
            <p className="text-2xl font-bold tracking-tighter text-gray-500">
              <small>Rs.</small>50,000/-
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCard;
