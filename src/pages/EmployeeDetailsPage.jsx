import axios from "axios";
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const EmployeeDetailsPage = () => {
  const [fetchdata, setFetchdata] = useState(null);
  const [image, setImage] = useState(null);
  let params = useParams();
  const navigate = useNavigate();
  const urlUserId = params.userId;

  const URL = import.meta.env.VITE_URL;
  const tokenReceived = Cookies.get("token");

  const axiosFetchInstance = axios.create({
    baseURL: URL,
    headers: {
      Authorization: "Bearer " + tokenReceived,
      "Content-Type": "multipart/form-data",
    },
  });
  useEffect(() => {
    axiosFetchInstance
      .get(`/admins/employees/${urlUserId}`)
      .then((res) => setFetchdata(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    Object.entries(fetchdata).forEach(([key, value]) => {
      formData.append(key, value);
    });
    axiosFetchInstance
      .put(`/admins/employees/${urlUserId}`, formData)
      .then((res) => alert("Successfully Updated"))
      .catch((err) => alert("Error ,retry!"));
  };
  if (!fetchdata) {
    return <div>Loading.....</div>;
  } else {
    return (
      <div className="w-full px-10 py-5 relative">
        <h2 className="text-2xl font-semibold text-sidebar absolute top-5">
          Employee Details
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="top-5 right-10 absolute text-black   rounded-sm px-3 hover:shadow-sm"
        >
          <div className="flex">
            <img src="/backarrow.png" alt="back" className="h-10 w-10" />
            <p className="text-lg my-auto">Back</p>
          </div>
        </button>
        <div className="p-5 mt-9">
          <h3 className="text-2xl capitalize font-medium">Information</h3>
          <form method="POST" onSubmit={handleSubmit}>
            <div className=" h-36 w-36 mx-auto bg-slate-300 rounded-full mb-6">
              <img
                src={fetchdata.image}
                alt="profile_pic"
                className="h-36 w-36 bg-cover object-cover rounded-full shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 capitalize gap-5">
              <div className="flex flex-col shadow-sm p-2 border rounded">
                <label for="firstname" className="">
                  First name:
                </label>
                <input
                  id="firstname"
                  value={fetchdata.firstName}
                  onChange={(e) =>
                    setFetchdata({ ...fetchdata, firstName: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col shadow-sm p-2 border rounded">
                <label for="lastname" className="">
                  Last name:
                </label>
                <input
                  id="lastname"
                  value={fetchdata.lastName}
                  onChange={(e) =>
                    setFetchdata({ ...fetchdata, lastName: e.target.value })
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
                  value={fetchdata.dob}
                  onChange={(e) =>
                    setFetchdata({ ...fetchdata, dob: e.target.value })
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
                  value={fetchdata.address}
                  onChange={(e) =>
                    setFetchdata({ ...fetchdata, address: e.target.value })
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
                  value={fetchdata.email}
                  onChange={(e) =>
                    setFetchdata({ ...fetchdata, email: e.target.value })
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
                  value={fetchdata.phone}
                  onChange={(e) =>
                    setFetchdata({ ...fetchdata, phone: e.target.value })
                  }
                />
              </div>
              {/* <div className="flex flex-col shadow-sm p-2 border rounded">
                <label for="joinDate" className="">
                  Date of Join:
                </label>
                <input
                  id="joinDate"
                  name="joinDate"
                  type="date"
                  value={fetchdata.joinDate.split("T")[0]}
                  onChange={(e) =>
                    setFetchdata({ ...fetchdata, joinDate: e.target.value })
                  }
                />
              </div> */}
            </div>
            <div className="flex mt-6 flex-col">
              <h3 className="text-2xl capitalize font-medium">documents</h3>
              <div className=" rounded-md grid grid-cols-3 gap-2">
                {fetchdata.documents.map((each) => {
                  return (
                    <div className="border p-4 rounded">
                      <p className="font-medium">{each.documentType}</p>
                      <input
                        type="file"
                        onChange={(e) =>
                          setFetchdata({
                            ...fetchdata,
                            [each.documentType]: e.target.files[0],
                          })
                        }
                      />
                      <img src={each.filename} alt="img" />
                    </div>
                  );
                })}
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
  }
};

export default EmployeeDetailsPage;
