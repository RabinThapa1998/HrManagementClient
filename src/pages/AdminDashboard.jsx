import React from "react";
import EmployeeListCard from "../../components/admindashboard/EmployeeListCard";
import EmployeeSummaryCard from "../../components/admindashboard/EmployeeSummaryCard";
const AdminDashboard = () => {
  return (
    <div className="w-full px-10 py-5 relative">
      <h2 className="text-2xl font-semibold text-sidebar absolute top-5">
        Admin Dashboard
      </h2>
      <EmployeeSummaryCard />
      <EmployeeListCard />
    </div>
  );
};

export default AdminDashboard;
