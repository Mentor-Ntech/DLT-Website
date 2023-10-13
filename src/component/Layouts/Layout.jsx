import { FAQs, Navbar, Footer} from "../index";
import { Outlet } from "react-router-dom";
import { About } from "../../homepage/index";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <About />
    
      <FAQs />
      <Footer />
    
    </>
  );
};

export default Layout;
