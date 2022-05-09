import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import "./App.scss";
import AddNewEmployeePage from "./pages/AddNewEmployeePage";
import AdminDashboard from "./pages/AdminDashboard";
import { Dashboard } from "./pages/Dashboard";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <div className="App font-inter">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="admindashboard" element={<AdminDashboard />} />
            <Route path="addnewemployee" element={<AddNewEmployeePage />} />
            <Route
              path="admindashboard/:userId"
              element={<EmployeeDetailsPage />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
