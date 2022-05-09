import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Rabin Thapa",
    position: "Poject Manager",
    phone: "9862045258",
    email: "imrabin1998@gmail.com",
    dob: "1998-12-22",
    address: "Tinkune, Kathmandu",
    doj: "1998-12-22",
  },
  {
    id: 2,
    name: "Suman Khadka",
    position: "Poject Manager",
    phone: "9862045258",
    email: "imrabin1998@gmail.com",
    dob: "1998-12-22",
    address: "Tinkune, Kathmandu",
    doj: "1998-12-22",
  },
  {
    id: 3,
    name: "Prisma Khatiwada",
    position: "Poject Manager",
    phone: "9862045258",
    email: "imrabin1998@gmail.com",
    dob: "1998-12-22",
  },
  {
    id: 4,
    name: "Swesha Singh",
    position: "Poject Manager",
    phone: "9862045258",
    email: "imrabin1998@gmail.com",
    address: "Tinkune, Kathmandu",
  },
  {
    id: 5,
    name: "Swesha Singh",
    position: "Poject Manager",
    phone: "9862045258",
    email: "imrabin1998@gmail.com",
    doj: "1998-12-22",
  },
];
const EmployeeDetailsPage = () => {
  const [fetchdata, setFetchdata] = useState(null);
  let params = useParams();
  console.log(fetchdata);
  useEffect(() => {
    const res = data.find((each) => each.id == params.userId);
    setFetchdata(res);
  }, []);
  if (!fetchdata) {
    return <div>Loading.....</div>;
  } else {
    return (
      <div className="w-full px-10 py-5 relative">
        <h2 className="text-2xl font-semibold text-sidebar absolute top-5">
          Employee Details
        </h2>
        <div className="p-5 mt-9">
          <h3 className="text-2xl capitalize font-medium">Information</h3>
          <form method="POST">
            <div className="grid grid-cols-2 capitalize gap-5">
              <div className="flex flex-col shadow-sm p-2 border rounded">
                <label for="fullname" className="">
                  full name:
                </label>
                <input
                  id="fullname"
                  value={fetchdata.name}
                  onChange={(e) =>
                    setFetchdata({ ...fetchdata, name: e.target.value })
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
              <div className="flex flex-col shadow-sm p-2 border rounded">
                <label for="doj" className="">
                  Date of Join:
                </label>
                <input
                  id="doj"
                  name="doj"
                  value={fetchdata.doj}
                  onChange={(e) =>
                    setFetchdata({ ...fetchdata, doj: e.target.value })
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
                  <img src="/ctzfront.jpeg" alt="" />
                </div>
                <div className="border  p-4 rounded">
                  <p className="font-medium">PAN</p>
                  <input type="file" />
                  <img src="/ctzfront.jpeg" alt="" />
                </div>
                <div className="border  p-4 rounded">
                  <p className="font-medium">Resume</p>
                  <input type="file" />
                  <img src="/ctzfront.jpeg" alt="" />
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
  }
};

export default EmployeeDetailsPage;
