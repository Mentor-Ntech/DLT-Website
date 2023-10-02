import { FAQs, Navbar, Footer, CourseSections } from "../index";
import { Outlet } from "react-router-dom";
import { About } from "../../homepage/index";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <CourseSections />
      <About />
      <FAQs />
      <Footer />
    </>
  );
};

export default Layout;
