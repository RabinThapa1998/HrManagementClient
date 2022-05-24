import axios from "axios";
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import SalaryDetailsCard from "../../components/addnewemployee/SalaryDetailsCard";

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
      .get(`/admins/employees/${params.userId}`)
      .then((res) => setFetchdata(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fetchdata);
    var formData = new FormData();
    formData.append("email", fetchdata.email);
    formData.append("firstName", fetchdata.firstName);
    formData.append("lastName", fetchdata.lastName);
    formData.append("phone", fetchdata.phone);
    formData.append("address", fetchdata.address);
    formData.append("dob", fetchdata.dob);
    formData.append("citizenship", fetchdata.citizenship);
    formData.append("cv", fetchdata.cv);
    formData.append("image", fetchdata.image);
    axiosFetchInstance
      .put(`/admins/employees/${params.userId}`, formData)
      .then((res) => {
        alert("Successfully Updated");
      })
      .catch((err) => {
        console.log(err);
        alert("Error ,retry!");
      });
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
        <div className="p-5 my-9 border rounded-md relative">
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
                <label htmlFor="firstname" className="">
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
                <label htmlFor="lastname" className="">
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
                <label htmlFor="dob" className="">
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
                <label htmlFor="address" className="">
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
                <label htmlFor="email" className="">
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
                <label htmlFor="phone" className="">
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
                <label htmlFor="joinDate" className="">
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
            <div className=" mt-6 ">
              <h3 className="text-2xl capitalize font-medium">documents</h3>
              <div className="flex flex-col">
                {fetchdata.documents.map((each, key) => {
                  return (
                    <div className="border p-4 rounded w-1/2" key={key}>
                      <p className="font-medium">{each.documentType}</p>
                      <img src={each.filename} alt="img" />
                    </div>
                  );
                })}
              </div>
              <div className="flex-col flex">
                <div className="my-10">
                  <label htmlFor="citizenship" className="text-lg font-bold">
                    Change citizenship
                  </label>
                  <input
                    type="file"
                    id="citizenship"
                    onChange={(e) =>
                      setFetchdata({
                        ...fetchdata,
                        citizenship: e.target.files[0],
                      })
                    }
                  />
                </div>
                <div className="my-10">
                  <label htmlFor="cv" className="text-lg font-bold">
                    Change cv
                  </label>
                  <input
                    type="file"
                    id="cv"
                    onChange={(e) =>
                      setFetchdata({
                        ...fetchdata,
                        cv: e.target.files[0],
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end my-5">
              <button
                className="bg-primary rounded px-3 py-2 text-xl text-white  shadow-sm hover:shadow-xl"
                type="submit"
              >
                Update Information
              </button>
            </div>
          </form>
        </div>
        <SalaryDetailsCard urlUserId={urlUserId} />
      </div>
    );
  }
};

export default EmployeeDetailsPage;
