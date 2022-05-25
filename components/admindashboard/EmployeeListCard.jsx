import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export const IndividualEmployeeCard = ({ employee }) => {
  const navigate = useNavigate();
  const link = employee.id;
  let activeStyle = {
    background: "underline",
  };
  const URL = import.meta.env.VITE_URL;
  const tokenReceived = Cookies.get("token");

  const axiosFetchInstance = axios.create({
    baseURL: URL,
    headers: { Authorization: "Bearer " + tokenReceived },
  });
  const handleDelete = (id) => {
    axiosFetchInstance
      .delete(`/admins/employees/${id}`)
      .then((res) => {
        alert("Deleted Successfully");
        console.log(res.data.status);
      })
      .catch((err) => {
        alert("Error on Delete");
        console.log(err);
      });
  };
  return (
    <div className="shadow bg-white rounded-md flex flex-col py-6 px-2 items-center relative border">
      <div className="h-24 w-24 rounded-full object-cover overflow-hidden ">
        <img src={employee?.image||"/pp.jpg"} alt="profilepicture" className="" />
      </div>
      <p className="text-xl font-semibold text-sidebar pt-3">
        {employee.firstName} {employee.lastName}
      </p>
      <p className="text-sm font-medium text-sidebar bg-slate-300 px-2 tracking-wider rounded-lg my-2 opacity-70">
        {employee.position}
      </p>
      <p className="text-gray-500 text-sm tracking-tight">{employee.phone}</p>
      <p className="text-blue-900 text-sm tracking-tight lowercase font-medium">
        {employee.email}
      </p>
      <div className="flex justify-between mt-3 w-full px-12">
        <button
          className="text-sm text-green-600 outline outline-green-600 outline-1 px-3 hover:bg-green-600 hover:text-white"
          onClick={() => navigate(`${employee.id}`)}
        >
          <p>Edit</p>
        </button>
        <button
          className="text-sm text-red-600 outline outline-red-600 outline-1 px-3 hover:bg-red-600 hover:text-white"
          onClick={() => handleDelete(employee.id)}
        >
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
};
const EmployeeListCard = ({ allEmployeeDetails }) => {
  return (
    <div className="shadow-sm rounded-md grid grid-cols-4 gap-x-6 gap-y-3 ">
      {allEmployeeDetails.map((employee, key) => {
        return <IndividualEmployeeCard employee={employee} key={key} />;
      })}
    </div>
  );
};

export default EmployeeListCard;
