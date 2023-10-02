import { Outlet } from "react-router-dom";
import { FAQs, Navbar, Footer, CourseSections } from "../index";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <CourseSections />
      <FAQs />
      <Footer />
    </>
  );
};

export default HomeLayout;
