import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import EmployeeListCard from "../../components/admindashboard/EmployeeListCard";
import EmployeeSummaryCard from "../../components/admindashboard/EmployeeSummaryCard";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { request } from "../../utils/axios-utils";

const AdminDashboard = () => {
  // const tokenReceived = useSelector((state) => state.auth.token);

  const { isLoading, data, isError, error } = useQuery("Admin-Dashboard", () =>
    request({ url: "/admins/employees", method: "get" })
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full px-10 py-5 relative">
      <h2 className="text-2xl font-semibold text-sidebar absolute top-5">
        Admin Dashboard
      </h2>
      <EmployeeSummaryCard />
      <EmployeeListCard allEmployeeDetails={data?.data.data} />
    </div>
  );
};

export default AdminDashboard;
