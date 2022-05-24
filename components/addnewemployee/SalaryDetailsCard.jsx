import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { request } from "../../utils/axios-utils";

const SalaryDetailsCard = ({ urlUserId }) => {
  const [salary, setSalary] = useState("");
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "Salary-Details",
    () => request({ url: `/admins/salaries/${urlUserId}`, method: "get" }),
    {}
  );

  if (isLoading) {
    return <div className="text-3xl">loading...</div>;
  }
  if (isError) {
    return <p>error...</p>;
  }

  const handleSubmit = () => {};

  return (
    <div className="border rounded-md py-6 px-5 relative my-14">
      <h3 className="text-2xl capitalize font-medium">Salary Details</h3>
      <div className="flex my-5 justify-between">
        <div className="my-3 border rounded-md ml-10 px-10 py-3">
          <p className="text-gray-600">Amount:</p>
          <p className="text-3xl font-bold tracking-tighter">
            <small>Rs.</small>
            {data.data.data[0]?.salaryAmount}/-
          </p>
        </div>
        <div className="my-3 border rounded-md ml-10 px-10 pt-3 pb-8">
          <p className="text-gray-600 font-semibold my-2 text-lg">
            Update Salary
          </p>

          <input
            type="number"
            value={data.data.data[0]?.salaryAmount}
            onChange={(e) => setSalary(e.target.value)}
            className="bg-slate-200 h-12 border-green-500  border-2 rounded-md"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-primary rounded px-3 py-2 text-xl text-white  shadow-sm hover:shadow-xl h-12 ml-5"
          >
            Update Salary
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryDetailsCard;
