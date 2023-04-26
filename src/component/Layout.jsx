import { FAQs, Navbar, Footer } from "./index";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FAQs />
      <Footer />
    </>
  );
};

export default Layout;
