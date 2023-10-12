import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li>
      {items.submenu ? (
        <>
          <div />
          <NavLink
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title} <RiArrowDropDownLine />
          </NavLink>

          <DropDown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <>
          <div />
          <NavLink to={items.path}>{items.title}</NavLink>
        </>
      )}
    </li>
  );
};

export default MenuItems;
