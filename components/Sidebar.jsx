import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuSvg } from "./svgs/Svgs";

const Sidebar = () => {
  const [shrink, setShrink] = useState(false);
  const handleClick = () => {
    setShrink((prev) => !prev);
    console.log(shrink);
  };

  return (
    <div
      className={`" text-white shadow-md h-screen  py-6 sticky top-0 overflow-hidden " ${
        shrink ? "w-20 bg-sidebar px-2" : "w-60 bg-sidebar px-5"
      } `}
    >
      <button
        onClick={handleClick}
        className={`${
          shrink
            ? "mb-20 flex justify-center w-full "
            : "mb-4 flex justify-end w-full "
        }`}
      >
        <MenuSvg />
      </button>
      {!shrink && (
        <h2 className="text-4xl font-extrabold text-center mb-8 ">HR Mgmt</h2>
      )}
      <div className="flex-col flex w-full">
        <Link
          to="/"
          className={` ${
            shrink
              ? "justify-between flex items-center hover:bg-hover py-3 pl-0 rounded-md"
              : "justify-start flex items-center hover:bg-hover py-3 pl-2 rounded-md"
          }`}
        >
          <img
            src="/dashboard.png"
            alt=""
            className={` ${shrink ? "h-8 w-8 m-auto block" : "h-6 w-6 block"}"`}
          />
          {!shrink && (
            <p className={`${shrink ? "ml-0 text-lg" : "ml-3 text-lg"}`}>
              Dashboard
            </p>
          )}
        </Link>
        <Link
          to="/profile"
          className={` ${
            shrink
              ? "justify-between flex items-center hover:bg-hover py-3 pl-0 rounded-md"
              : "justify-start flex items-center hover:bg-hover py-3 pl-2 rounded-md"
          }`}
        >
          <img
            src="/profile.png"
            alt=""
            className={` ${shrink ? "h-8 w-8 m-auto block" : "h-6 w-6 block"}"`}
          />
          {!shrink && (
            <p className={`${shrink ? "ml-0 text-lg" : "ml-3 text-lg"}`}>
              Profile
            </p>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
