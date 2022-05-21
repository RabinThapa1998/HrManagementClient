import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../Reducers/AuthReducer";
import { loginDetailsAction } from "../Reducers/UserLoginReducer";
import Cookies from "js-cookie";

const Login = () => {
  const [loginCred, setLoginCred] = useState({ username: "", password: "" });
  const [disabled, setDisabled] = useState({ disabled: false });
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get("token")) {
      dispatch(loginAction({ token: true }));
    }
  }, []);
  const handleSubmit = (e) => {
    setDisabled({ disabled: true });

    const URL = import.meta.env.VITE_URL;
    e.preventDefault();
    axios
      .post(`${URL}/auths/login`, {
        email: loginCred.username,
        password: loginCred.password,
      })
      .then((res) => {
        // dispatch(loginAction({ token: res.data.data.token }));
        dispatch(loginAction({ token: true }));
        dispatch(
          loginDetailsAction({ logindetails: res.data.data.userDetails })
        );
        Cookies.set("token", res.data.data.token, {
          sameSite: "none",
          secure: true,
        });
        Cookies.set("roleId", res.data.data.userDetails.roleId, {
          sameSite: "none",
          secure: true,
        });
      })
      .catch((err) => {
        console.log(err.message);
        alert("Invalid Credentials");
        setDisabled({ disabled: false });
      });
  };
  return (
    <div className="grid place-items-center bg-gray-100 h-screen w-screen font-inter">
      <div className=" w-1/4 shadow-2xl rounded-lg bg-white py-5 px-4">
        <h1 className="text-3xl font-bold text-center text-sidebar">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center my-20 py-6 w-full">
            <label
              for="username"
              className="text-lg font-bold my-2 text-left w-full text-gray-500"
            >
              Username
            </label>
            <input
              type="username"
              name="username"
              id="username"
              value={loginCred.username}
              className="h-10 bg-slate-100 focus:outline-blue-400 focus:bg-slate-300 w-full"
              onChange={(e) =>
                setLoginCred({ ...loginCred, username: e.target.value })
              }
            />
            <label
              for="password"
              className="text-lg font-bold mb-2 mt-5  text-left w-full text-gray-500"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginCred.password}
              className="h-10 bg-slate-100 focus:outline-blue-400 focus:bg-slate-300 w-full"
              onChange={(e) =>
                setLoginCred({ ...loginCred, password: e.target.value })
              }
            />

            <button
              className="bg-sidebar rounded hover:shadow-lg py-2 px-14 text-white text-lg mt-12 disabled:bg-slate-400 disabled:cursor-wait "
              type="submit"
              {...disabled}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
