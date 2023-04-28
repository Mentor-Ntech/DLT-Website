import "./Navbar.scss";
import { images } from "../../images";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";

import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import MenuItems from "./MenuItems";

const navLists = [
  // { title: "About Us", id: 2, path: "/about" },
  //   { title: "Projects", id: 1, path: "/projects" },
  { title: "Contact", id: 2, path: "/contact" },
  { title: "Our Team", id: 3, path: "/team" },
  {
    title: "Join Us",
    id: 5,
    path: "/join",
    submenu: [
      { title: "Training", path: "/training", id: 5.1 },
      { title: "Incubation Program", path: "/incubation", id: 5.2 },
    ],
  },
];

const navItems = [
  { title: "Home", id: 1, path: "/" },
  { title: "Contact", id: 2, path: "/contact" },
  { title: "Our Team", id: 3, path: "/team" },
  {
    title: "Join Next Cohorts",
    id: 4,
    path: "/join",
    submenu: [
      { title: "Apply for training", path: "/join", id: 4.1 },
      { title: "Apply for training", path: "/join", id: 4.2 },
    ],
  },
  //   { title: "FAQs", id: 5, path: "/faqs" },
  //   { title: "About Us", id: 6, path: "/about" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

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
              <li>
                <div />
                <a href="#faqs">
                  FAQ<span>s</span>
                </a>
              </li>
              <li>
                <div />
                <a href="#about">About Us</a>
              </li>
            </ul>
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
                <ul>
                  {navItems.map(({ title, id, path }) => (
                    <li key={id}>
                      <NavLink to={path} onClick={() => setToggle(false)}>
                        {title}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <a href="#faqs" onClick={() => setToggle(false)}>
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={() => setToggle(false)}>
                      About Us
                    </a>
                  </li>
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
