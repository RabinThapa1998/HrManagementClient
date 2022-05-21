import axios from "axios";
import React, { useEffect, useState } from "react";
import DetailsCard from "../../components/userprofile/DetailsCard";
import ProfileCard from "../../components/userprofile/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const UserProfilePage = () => {
  const [userData, setUserData] = useState("");
  // const tokenReceived = useSelector((state) => state.auth.token);
  // const tokenReceived = Cookies.get("token");
  const URL = import.meta.env.VITE_URL;
  const axiosFetchInstance = axios.create({
    baseURL: URL,
    headers: { Authorization: "Bearer " + Cookies.get("token") },
  });
  useEffect(() => {
    axiosFetchInstance
      .get(`${URL}/admins/employees/7`)
      .then((res) => setUserData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  if (!userData) {
    return <div>Loading....</div>;
  }
  return (
    <div className="flex w-full items-center justify-around p-5 relative mt-10">
      <h2 className="text-2xl font-semibold text-sidebar absolute -top-5 left-10">
        Profile
      </h2>
      <div className="h-auto w-3/4 rounded-md shadow-md bg-white">
        <DetailsCard userData={userData} />
      </div>
      <div className="h-auto w-1/5 rounded-md shadow-md bg-white self-start mt-11 p-4">
        <ProfileCard userData={userData} />
      </div>
    </div>
  );
};

export default UserProfilePage;
