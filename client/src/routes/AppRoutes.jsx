import { Routes, Route } from "react-router-dom";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";
import MainLayout from "../layout/MainLayout";
import Home from "../components/pages/Home";

function AppRoutes() {
  return (
    <div>
      <Routes>
        {/* Pages with Layout */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>

        {/* Pages without login */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
