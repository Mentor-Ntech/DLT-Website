import "./Navbar.scss";
import { images } from "../../images";

import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import MenuItems from "./MenuItems";

// Navbar Data
const navLists = [
  { title: "Courses", id: 2, path: "/our-courses" },
  { title: "BlockChain", id: 3, path: "/our-courses/blockchain-dev" },
];

const navMenuItems = [
  { title: "Home", id: 1, path: "/" },
  { title: "Courses", id: 2, path: "/our-courses" },
  { title: "BlockChain", id: 3, path: "/our-courses/blockchain-dev" },
  { title: "Apply for incubation", id: 3, path: "/incubation" },

  //   { title: "FAQs", id: 5, path: "/faqs" },
  //   { title: "About Us", id: 6, path: "/about" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar container">
      <div className="navbarCon">
        <a href="/">
          <img src={images.dltlogo} alt="DLTAfrica logo" />
        </a>

        <div className="navbarItems appFlex">
          <div className="navbarItemsLinks">
            <ul>
              {navLists.map((navList) => (
                <MenuItems items={navList} key={navList.id} />
              ))}
              {/* <li>
                <div />
                <a href="#faqs">
                  FAQ<span>s</span>
                </a>
              </li>
              <li>
                <div />
                <a href="#about">About Us</a>
              </li> */} 
            </ul>
            <button className="navButton">
                  <Link to="/incubation">Apply For Incubation</Link>  
            </button>
          </div>
          <div className="navbarMenu">
            <FiMenu onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{ x: [260, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="toggleMenu"
              >
                
                <div>
                  <GrClose onClick={() => setToggle(false)} />
                </div>
                <ul id="navItemLists">
                  {navMenuItems.map((navMenuItem) => (
                    <>
                      {navMenuItem.submenu ? (
                        <>
                          <li>
                            <div />
                            <NavLink
                              aria-expanded={dropdown ? "true" : "false"}
                              onClick={() => setDropdown((prev) => !prev)}
                            >
                              {navMenuItem.title}{" "}
                              <RiArrowDropDownLine className="menuArrow" />

                            </NavLink>


                            <aside
                              id="menuDropdown"
                              className={`menuDropdown ${
                                dropdown ? "show" : ""
                              }`}
                            >
                              <ul>
                                {navMenuItem.submenu.map((submenu) => (
                                  <li
                                    key={submenu.id}
                                    className="menuItems"
                                    onClick={() => setToggle(false)}
                                  >
                                    <NavLink to={submenu.path}>
                                      {submenu.title}
                                    </NavLink>
                                  </li>

                                  
                                ))}
                              </ul>
                            </aside>
                          </li>
                    
                        </>
                        
                      ) : (
                        <>
                          <li onClick={() => setToggle(false)}>
                            <div />
                            <NavLink to={navMenuItem.path}>
                              {navMenuItem.title}
                            </NavLink>
                          </li>
                          {/* <button>Apply For Incubation</button> */}


                        </>
                      )}
                    </>
                  ))}
                  {/* <li onClick={() => setToggle(false)}>
                    <a href="#faqs">FAQs</a>
                  </li>
                  <li onClick={() => setToggle(false)}>
                    <a href="#about">About Us</a>
                  </li> */}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
