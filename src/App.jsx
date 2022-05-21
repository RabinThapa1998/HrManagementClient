import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Layout from "../components/Layout";
import "./App.scss";
import AddNewEmployeePage from "./pages/AddNewEmployeePage";
import AdminDashboard from "./pages/AdminDashboard";
import { Dashboard } from "./pages/Dashboard";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import Login from "./pages/Login";
import UserProfilePage from "./pages/UserProfilePage";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function App() {
  const token = useSelector((state) => state.auth.token);

  const ProtectedAdminRoute = () => {
    const navigate = useNavigate();
    if (Cookies.get("roleId") === 2) {
      return navigate(-1);
    }
    return <Outlet />;
  };

  if (!token) {
    return <Login />;
  } else {
    return (
      <div className="App font-inter">
        <BrowserRouter>
          <Layout>
            <Routes>
              {Cookies.get("roleId") == 2 && (
                <>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="profile" element={<UserProfilePage />} />
                </>
              )}
              {Cookies.get("roleId") == 1 && (
                <>
                  <Route element={<ProtectedAdminRoute />}>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route
                      path="addnewemployee"
                      element={<AddNewEmployeePage />}
                    />
                    <Route path=":userId" element={<EmployeeDetailsPage />} />
                  </Route>
                </>
              )}
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
