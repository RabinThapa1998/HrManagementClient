import React, { useState } from "react";

const AddNewEmployeePage = () => {
  const [newdata, setNewdata] = useState({
    name: " ",
    position: " ",
    phone: " ",
    email: " ",
    dob: " ",
    address: " ",
    doj: " ",
  });

  return (
    <div className="w-full px-10 py-5 relative">
      <h2 className="text-2xl font-semibold text-sidebar absolute top-5">
        Add New Employee
      </h2>
      <div className="p-5 mt-9">
        <h3 className="text-2xl capitalize font-medium">Information</h3>
        <form method="POST">
          <div className="flex flex-col  capitalize gap-5">
            <div className="flex flex-col shadow-sm p-2 border rounded">
              <label for="fullname" className="">
                full name:
              </label>
              <input
                id="fullname"
                value={newdata.name}
                onChange={(e) =>
                  setNewdata({ ...newdata, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col shadow-sm p-2 border rounded">
              <label for="dob" className="">
                Date Of Birth:
              </label>
              <input
                id="dob"
                type="date"
                value={newdata.dob}
                onChange={(e) =>
                  setNewdata({ ...newdata, dob: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col shadow-sm p-2 border rounded">
              <label for="address" className="">
                address:
              </label>
              <input
                id="address"
                name="address"
                value={newdata.address}
                onChange={(e) =>
                  setNewdata({ ...newdata, address: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col shadow-sm p-2 border rounded">
              <label for="email" className="">
                email:
              </label>
              <input
                id="email"
                name="email"
                value={newdata.email}
                onChange={(e) =>
                  setNewdata({ ...newdata, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col shadow-sm p-2 border rounded">
              <label for="phone" className="">
                Phone Number:
              </label>
              <input
                id="phone"
                name="phone"
                value={newdata.phone}
                onChange={(e) =>
                  setNewdata({ ...newdata, phone: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col shadow-sm p-2 border rounded">
              <label for="doj" className="">
                Date of Join:
              </label>
              <input
                id="doj"
                name="doj"
                value={newdata.doj}
                onChange={(e) =>
                  setNewdata({ ...newdata, doj: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex mt-6 flex-col">
            <h3 className="text-2xl capitalize font-medium">documents</h3>
            <div className=" rounded-md grid grid-cols-3 gap-2">
              <div className="border p-4 rounded">
                <p className="font-medium">Citizenship</p>
                <input type="file" />
              </div>
              <div className="border  p-4 rounded">
                <p className="font-medium">PAN</p>
                <input type="file" />
              </div>
              <div className="border  p-4 rounded">
                <p className="font-medium">Resume</p>
                <input type="file" />
              </div>
            </div>
          </div>
          <div className="flex justify-end my-5">
            <button
              className="bg-primary rounded px-3 py-2 text-xl text-white  shadow-sm hover:shadow-xl"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewEmployeePage;
