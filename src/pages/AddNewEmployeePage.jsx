import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const AddNewEmployeePage = () => {
  const [newdata, setNewdata] = useState({
    firstName: " ",
    lastName: " ",
    phone: " ",
    email: " ",
    password: "",
    dob: " ",
    address: " ",
    // joinDate: " ",
    cv: " ",
    citizenship: "",
    image: "",
  });
  const [btnStatus, setBtnStatus] = useState(false);

  const URL = import.meta.env.VITE_URL;
  const axiosFetchInstance = axios.create({
    baseURL: URL,
    headers: {
      Authorization: "Bearer " + Cookies.get("token"),
      "Content-Type": "multipart/form-data",
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnStatus(true);
    var formData = new FormData();
    Object.entries(newdata).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axiosFetchInstance
      .post(`/admins/employees`, formData)
      .then((res) => {
        console.log(res.data);
        alert("Added Successfully");
        setBtnStatus(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Error on Adding ,Retry!!");
        setBtnStatus(false);
      });
  };
  return (
    <div className="w-full px-10 py-5 relative">
      <h2 className="text-2xl font-semibold text-sidebar absolute top-5">
        Add New Employee
      </h2>
      <div className="p-5 mt-9">
        <h3 className="text-2xl capitalize font-medium">Information</h3>
        <div className=" h-36 w-36 mx-auto bg-slate-300 rounded-full">
          {newdata.image && (
            <img
              src={window.URL.createObjectURL(newdata.image)}
              alt="img"
              className="h-36 w-36 bg-cover object-cover rounded-full shadow-lg"
            />
          )}
        </div>
        <form onSubmit={() => handleSubmit(e)} className="mt-4">
          <div className="grid grid-cols-2 capitalize gap-5">
            <div className="flex flex-col shadow-sm p-2 border rounded">
              <label htmlFor="profilepic" className="">
                Profile pic:
              </label>
              <input
                id="profilepic"
                type="file"
                onChange={(e) =>
                  setNewdata({ ...newdata, image: e.target.files[0] })
                }
              />
            </div>

            <div className="flex flex-col shadow-sm p-2 border rounded">
              <label htmlFor="firstname" className="">
                first name:
              </label>
              <input
                id="firstname"
                value={newdata.firstName}
                onChange={(e) =>
                  setNewdata({ ...newdata, firstName: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col shadow-sm p-2 border rounded">
              <label htmlFor="lastname" className="">
                last name:
              </label>
              <input
                id="lastname"
                value={newdata.lastName}
                onChange={(e) =>
                  setNewdata({ ...newdata, lastName: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col shadow-sm p-2 border rounded">
              <label htmlFor="dob" className="">
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
              <label htmlFor="address" className="">
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
              <label htmlFor="email" className="">
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
              <label htmlFor="password" className="">
                password:
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={newdata.password}
                onChange={(e) =>
                  setNewdata({ ...newdata, password: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col shadow-sm p-2 border rounded">
              <label htmlFor="phone" className="">
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
            {/* <div className="flex flex-col shadow-sm p-2 border rounded">
              <label htmlFor="joinDate" className="">
                Date of Join:
              </label>
              <input
                id="joinDate"
                name="joinDate"
                type="text"
                value={newdata.joinDate}
                onChange={(e) =>
                  setNewdata({ ...newdata, joinDate: e.target.value })
                }
              />
            </div> */}
          </div>
          <div className="flex mt-6 flex-col">
            <h3 className="text-2xl capitalize font-medium">documents</h3>
            <div className=" rounded-md grid grid-cols-3 gap-2">
              <div className="border p-4 rounded">
                <label className="font-medium" htmlFor="ctz">
                  Citizenship
                </label>
                <input
                  type="file"
                  id="ctz"
                  onChange={(e) =>
                    setNewdata({ ...newdata, citizenship: e.target.files[0] })
                  }
                />
              </div>
              {/* <div className="border  p-4 rounded">
                <p className="font-medium">PAN</p>
                <input
                  type="file"
                  onChange={(e) =>
                    setNewdata({ ...newdata, citizenship: e.target.files[0] })
                  }
                />
              </div> */}
              <div className="border  p-4 rounded">
                <label className="font-medium" htmlFor="cv">
                  CV
                </label>
                <input
                  type="file"
                  id="cv"
                  onChange={(e) =>
                    setNewdata({ ...newdata, cv: e.target.files[0] })
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end my-5">
            <button
              className="border border-green-500 rounded px-8 py-2 text-xl text-black  shadow-sm hover:shadow-xl hover:bg-green-500 hover:text-white disabled:bg-gray-300 disabled:border-gray-200 disabled:cursor-wait"
              type="submit"
              onClick={(e) => handleSubmit(e)}
              disabled={btnStatus}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewEmployeePage;
