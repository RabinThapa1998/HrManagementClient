import React from "react";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <div className="flex justify-start flex-row bg-light">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
