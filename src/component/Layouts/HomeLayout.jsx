import { Outlet } from "react-router-dom";
import { FAQs, Navbar, Footer } from "../index";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FAQs />
      <Footer />
    </>
  );
};

export default HomeLayout;
