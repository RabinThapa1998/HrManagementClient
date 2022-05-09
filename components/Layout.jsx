import React from "react";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <div className="flex justify-start flex-row bg-slate-50">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
