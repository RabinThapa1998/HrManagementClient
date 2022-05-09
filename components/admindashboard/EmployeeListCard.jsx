import React from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Rabin Thapa",
    position: "Poject Manager",
    phone: "9862045258",
    email: "imrabin1998@gmail.com",
  },
  {
    id: 2,
    name: "Suman Khadka",
    position: "Poject Manager",
    phone: "9862045258",
    email: "imrabin1998@gmail.com",
  },
  {
    id: 3,
    name: "Prisma Khatiwada",
    position: "Poject Manager",
    phone: "9862045258",
    email: "imrabin1998@gmail.com",
  },
  {
    id: 4,
    name: "Swesha Singh",
    position: "Poject Manager",
    phone: "9862045258",
    email: "imrabin1998@gmail.com",
  },
  {
    id: 5,
    name: "Swesha Singh",
    position: "Poject Manager",
    phone: "9862045258",
    email: "imrabin1998@gmail.com",
  },
];

export const IndividualEmployeeCard = ({ employee }) => {
  const navigate = useNavigate();
  const link = employee.id;
  return (
    <div className="shadow-sm bg-white rounded-md flex flex-col py-6 px-2 items-center relative">
      <div className="h-24 w-24 rounded-full object-cover overflow-hidden ">
        <img src="/pp.jpg" alt="profilepicture" className="" />
      </div>
      <p className="text-xl font-semibold text-sidebar pt-3">{employee.name}</p>
      <p className="text-sm font-medium text-sidebar bg-slate-300 px-2 tracking-wider rounded-lg my-2 opacity-70">
        {employee.position}
      </p>
      <p className="text-gray-500 text-sm tracking-tight">{employee.phone}</p>
      <p className="text-blue-900 text-sm tracking-tight lowercase font-medium">
        {employee.email}
      </p>
      <button
        className="text-sm text-red-500 underline top-5 absolute right-2"
        onClick={() => navigate(` ${employee.id}`)}
      >
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5L12 5.01M12 12L12 12.01M12 19L12 19.01M12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13ZM12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20Z"
            stroke="#4A5568"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>
    </div>
  );
};
const EmployeeListCard = () => {
  return (
    <div className="shadow-sm rounded-md grid grid-cols-4 gap-x-6 gap-y-3 ">
      {data.map((employee) => {
        return <IndividualEmployeeCard employee={employee} />;
      })}
    </div>
  );
};

export default EmployeeListCard;
