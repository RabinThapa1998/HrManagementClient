import React from "react";

const DetailsCard = ({ userData }) => {
  console.log(userData);
  const {
    firstName,
    lastName,
    dob,
    phone,
    address,
    email,
    joinDate,
    documents,
  } = userData;
  return (
    <div className="p-5">
      <h3 className="text-2xl capitalize font-medium">Information</h3>
      <div className="grid grid-cols-2 capitalize gap-5">
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">full name:</p>
          <p>
            {firstName} {lastName}
          </p>
        </div>
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">Date Of Birth:</p>
          <p> {dob}</p>
        </div>
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">address:</p>
          <p>{address}</p>
        </div>
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">email:</p>
          <p className="lowercase">{email}</p>
        </div>
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">phone number:</p>
          <p>{phone}</p>
        </div>
        <div className="flex flex-col shadow-sm p-2 border rounded">
          <p className="">date Of Join:</p>
          <p>{joinDate}</p>
        </div>
      </div>
      <div className="flex mt-6 flex-col">
        <h3 className="text-2xl capitalize font-medium">documents</h3>
        <div className=" rounded-md grid grid-cols-3 gap-2">
          {documents.map((eachdoc) => {
            return (
              <div className="border p-4 rounded">
                <p className="font-medium capitalize">{eachdoc.documentType}</p>
                <div className="border-2 h-1 w-3/4 mb-3"></div>
                <img src={eachdoc.filename} alt="document" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
