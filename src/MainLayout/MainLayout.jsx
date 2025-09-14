import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
