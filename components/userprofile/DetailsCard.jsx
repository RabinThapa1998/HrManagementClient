import React from "react";

const DetailsCard = () => {
  return (
    <div className="p-5">
      <h3 className="text-2xl capitalize font-medium">Information</h3>
      <div className="grid grid-cols-2 capitalize gap-5">
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">full name:</p>
          <p>Rabin Thapa</p>
        </div>
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">Date Of Birth:</p>
          <p> 1998/01/11</p>
        </div>
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">address:</p>
          <p>Tinkune, Kathmandu</p>
        </div>
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">email:</p>
          <p className="lowercase">rabinthapa.rbt@gmail.com</p>
        </div>
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">phone number:</p>
          <p>9862045258</p>
        </div>
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">date Of Join:</p>
          <p>2021/01/22</p>
        </div>
      </div>
      <div className="flex mt-6 flex-col">
        <h3 className="text-2xl capitalize font-medium">documents</h3>
        <div className=" rounded-md grid grid-cols-3 gap-2">
          <div className="border p-4 rounded">
            <p className="font-medium">Citizenship</p>
            <img src="/ctzfront.jpeg" alt="" />
          </div>
          <div className="border  p-4 rounded">
            <p className="font-medium">PAN</p>
            <img src="/ctzfront.jpeg" alt="" />
          </div>
          <div className="border  p-4 rounded">
            <p className="font-medium">Resume</p>
            <img src="/ctzfront.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
