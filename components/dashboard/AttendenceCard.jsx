import React from "react";

const AttendenceCard = () => {
  return (
    <div className="shadow-md rounded-md w-2/3 h-auto bg-white p-3 relative mb-3 mr-5">
      <h3 className="text-3xl text-sidebar tracking-tight font-semibold">
        Attendance
      </h3>
      <div className="flex my-5">
        <div className="flex-col border rounded-lg bg-green-200 p-3 shadow-sm">
          <p className="font-semibold ">Total Attendance</p>
          <h4 className="text-5xl text-center mt-2">
            29
            <small className="text-xl">days</small>
          </h4>
        </div>
        <div className="flex-col border rounded-lg bg-red-200 p-3 shadow-sm mx-2">
          <p className="font-semibold ">Total Leave</p>
          <h4 className="text-5xl text-center mt-2">
            2<small className="text-xl">days</small>
          </h4>
        </div>
      </div>

      <div className="flex absolute top-2 right-3">
        <div className="border rounded p-2">
          <p className="text-gray-500 text-xs font-medium">Attendance Status</p>
          <div className="flex justify-start items-center">
            <p className="text-sm lowercase">Present</p>
            <div className="h-2 w-2 bg-green-400 ml-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendenceCard;
