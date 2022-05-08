import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import "./App.scss";
import { Dashboard } from "./pages/Dashboard";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <div className="App font-inter">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="profile" element={<UserProfilePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
