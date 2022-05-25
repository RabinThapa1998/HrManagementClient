import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { MenuSvg } from "./svgs/Svgs";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const Sidebar = () => {
  let params = useParams();
  console.log("params", params);
  // const [loginDetails, setLoginDetails] = useState(Cookies.get("roleId"));
  // const loginDetails = useSelector((state) => state.userlogin.logindetails);
  const [shrink, setShrink] = useState(false);
  const handleClick = () => {
    setShrink((prev) => !prev);
    console.log(shrink);
  };

  let activeStyle = {
    backgroundColor: "#55b060",
  };

  return (
    <div
      className={`" text-white shadow-md h-screen  py-6 sticky top-0 overflow-hidden transition-all duration-150 " ${
        shrink
          ? "w-20 bg-sidebar px-2 flex-shrink-0"
          : "w-60 bg-sidebar px-5 flex-shrink-0"
      } `}
    >
      <button
        onClick={handleClick}
        className={`${
          shrink
            ? "mb-4 flex justify-center w-full "
            : "mb-4 flex justify-end w-full "
        }`}
      >
        <MenuSvg />
      </button>
      <div className="h-24 pt-4">
        {!shrink && (
          <h2 className="text-4xl font-extrabold text-center mb-8 ">HR Mgmt</h2>
        )}
      </div>
      <div className="flex-col flex w-full">
        {Cookies.get("roleId") == 2 ? (
          <>
            <NavLink
              to="/"
              className={` ${
                shrink
                  ? "justify-between flex items-center hover:bg-hover py-3 pl-0 rounded-md my-2"
                  : "justify-start flex items-center hover:bg-hover py-3 pl-2 rounded-md my-2"
              }`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img
                src="/dashboard.png"
                alt=""
                className={` ${
                  shrink ? "h-8 w-8 m-auto block" : "h-6 w-6 block"
                }"`}
              />
              {!shrink && (
                <p className={`${shrink ? "ml-0 text-lg" : "ml-3 text-lg"}`}>
                  Dashboard
                </p>
              )}
            </NavLink>
            <NavLink
              to="/profile"
              className={` ${
                shrink
                  ? "justify-between flex items-center hover:bg-hover py-3 pl-0 rounded-md my-2"
                  : "justify-start flex items-center hover:bg-hover py-3 pl-2 rounded-md my-2"
              }`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img
                src="/profile.png"
                alt=""
                className={` ${
                  shrink ? "h-8 w-8 m-auto block" : "h-6 w-6 block"
                }"`}
              />
              {!shrink && (
                <p className={`${shrink ? "ml-0 text-lg" : "ml-3 text-lg"}`}>
                  Profile
                </p>
              )}
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className={` ${
                shrink
                  ? "justify-between flex items-center hover:bg-hover py-3 pl-0 rounded-md my-2"
                  : "justify-start flex items-center hover:bg-hover py-3 pl-2 rounded-md my-2"
              }`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img
                src="/dashboard.png"
                alt=""
                className={` ${
                  shrink ? "h-8 w-8 m-auto block" : "h-6 w-6 block"
                }"`}
              />
              {!shrink && (
                <p className={`${shrink ? "ml-0 text-lg" : "ml-3 text-lg"}`}>
                  Dashboard
                </p>
              )}
            </NavLink>

            <NavLink
              to="/addnewemployee"
              className={` ${
                shrink
                  ? "justify-between flex items-center hover:bg-hover py-3 pl-0 rounded-md my-2"
                  : "justify-start flex items-center hover:bg-hover py-3 pl-2 rounded-md my-2"
              }`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img
                src="/profile.png"
                alt=""
                className={` ${
                  shrink ? "h-8 w-8 m-auto block" : "h-6 w-6 block"
                }"`}
              />
              {!shrink && (
                <p className={`${shrink ? "ml-0 text-lg" : "ml-3 text-lg"}`}>
                  Add Employee
                </p>
              )}
            </NavLink>
            <NavLink
              to="/salarylist"
              className={` ${
                shrink
                  ? "justify-between flex items-center hover:bg-hover py-3 pl-0 rounded-md my-2"
                  : "justify-start flex items-center hover:bg-hover py-3 pl-2 rounded-md my-2"
              }`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img
                src="/salary.png"
                alt=""
                className={` ${
                  shrink ? "h-8  w-8 m-auto block" : "h-6 w-6 block"
                }"`}
              />
              {!shrink && (
                <p className={`${shrink ? "ml-0 text-lg" : "ml-3 text-lg"}`}>
                  Salary
                </p>
              )}
            </NavLink>
            <NavLink
              to="/events"
              className={` ${
                shrink
                  ? "justify-between flex items-center hover:bg-hover py-3 pl-0 rounded-md my-2"
                  : "justify-start flex items-center hover:bg-hover py-3 pl-2 rounded-md my-2"
              }`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img
                src="/event-icon.png"
                alt=""
                className={` ${
                  shrink ? "h-8  w-8 m-auto block" : "h-6 w-6 block"
                }"`}
              />
              {!shrink && (
                <p className={`${shrink ? "ml-0 text-lg" : "ml-3 text-lg"}`}>
                  Events
                </p>
              )}
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
