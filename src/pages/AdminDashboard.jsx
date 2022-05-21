import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import EmployeeListCard from "../../components/admindashboard/EmployeeListCard";
import EmployeeSummaryCard from "../../components/admindashboard/EmployeeSummaryCard";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const AdminDashboard = () => {
  const [allEmployeeDetails, setAllEmployeeDetails] = useState("");
  const URL = import.meta.env.VITE_URL;
  // const tokenReceived = useSelector((state) => state.auth.token);
  const tokenReceived = Cookies.get("token");

  const axiosFetchInstance = axios.create({
    baseURL: URL,
    headers: { Authorization: "Bearer " + tokenReceived },
  });
  useEffect(() => {
    axiosFetchInstance
      .get(`/admins/employees`)
      .then((res) => setAllEmployeeDetails(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  if (!allEmployeeDetails) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full px-10 py-5 relative">
      <h2 className="text-2xl font-semibold text-sidebar absolute top-5">
        Admin Dashboard
      </h2>
      <EmployeeSummaryCard />
      <EmployeeListCard allEmployeeDetails={allEmployeeDetails} />
    </div>
  );
};

export default AdminDashboard;
