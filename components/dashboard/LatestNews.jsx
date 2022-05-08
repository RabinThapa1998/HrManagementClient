import React from "react";

const LatestNews = () => {
  return (
    <div className="shadow-md rounded-md w-1/3 h-auto bg-white p-3 relative mb-3">
      <h3 className="text-3xl text-sidebar tracking-tight font-semibold">
        Latest News
      </h3>
      <div className="flex flex-col">
        <div className="border rounded-md">
          <p>Holiday</p>
          <p>2021/6/1</p>
        </div>
        <div className="border rounded-md">
          <p>Holiday</p>
          <p>2021/6/1</p>
        </div>
        <div className="border rounded-md">
          <p>Holiday</p>
          <p>2021/6/1</p>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
