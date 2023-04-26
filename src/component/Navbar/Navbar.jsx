import "./Navbar.scss";
import { images } from "../../images";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const navList = [
  //   { title: "Projects", id: 1, path: "/projects" },
  //   { title: "About Us", id: 2, path: "#about" },
  { title: "Contact", id: 2, path: "/contact" },
  { title: "Our Team", id: 3, path: "/team" },
  { title: "Join Us", id: 5, path: "/join" },
];

const navItems = [
  { title: "Home", id: 1, path: "/" },
  { title: "Contact", id: 2, path: "/contact" },
  { title: "Our Team", id: 3, path: "/team" },
  //   { title: "About Us", id: 4, path: "/about" },
  { title: "Join Next Cohorts", id: 5, path: "/join" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar container">
      <div className="navbarCon">
        <div className="navbarLogo">
          <a href="/">
            <img src={images.dltlogo} alt="DLTAfrica logo" />
          </a>
        </div>

        <div className="navbarItems appFlex">
          <div className="navbarItemsLinks">
            {navList.map(({ title, id, path }) => (
              <ul key={id}>
                <li>
                  <div />
                  <NavLink to={path}>{title}</NavLink>
                </li>
              </ul>
            ))}
            <ul>
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
