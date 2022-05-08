import React from "react";
import AttendenceCard from "../../components/dashboard/AttendenceCard";
import CalendarCard from "../../components/dashboard/CalendarCard";
import DashboardNavProfileCard from "../../components/dashboard/DashboardNavProfileCard";
import LatestNews from "../../components/dashboard/LatestNews";
import SalaryCard from "../../components/dashboard/SalaryCard";

export const Dashboard = () => {
  return (
    <div className="w-full px-10 py-5">
      <div className="flex justify-end mb-8">
        <DashboardNavProfileCard />
      </div>
      <div className="flex justify-between">
        <AttendenceCard />
        <LatestNews />
      </div>
      <SalaryCard />
      <CalendarCard />
    </div>
  );
};
