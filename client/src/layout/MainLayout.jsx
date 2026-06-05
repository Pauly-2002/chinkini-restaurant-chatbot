import React from "react";
import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      {/* Main Content */}
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
