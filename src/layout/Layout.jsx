import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MobileSidebar from "../components/MobileSidebar";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");
    if (!isAuthenticated) {
      navigate('/'); 
    }
  }, [navigate]);
  return (
    <div>
        <Banner />
        <MobileSidebar />
      <div className="flex justify-between items-center">
      <Sidebar />
        <div className="lg:py-8 md:py-8 py-2 flex-col lg:h-[100vh] md:h-[100vh] h-auto flex lg:w-[80%] md:w-[80%] w-[100%] overflow-y-scroll">
        <div className="ml-auto lg:py-4 md:py-4 py-2 lg:pr-12 md:pr-12 pr-4">
          <Navbar />
        </div>
        <div className="lg:px-12 md:px-12 px-4">
          <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
