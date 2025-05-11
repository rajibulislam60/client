import React from "react";
import { Outlet } from "react-router";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";

const RootLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayOut;
