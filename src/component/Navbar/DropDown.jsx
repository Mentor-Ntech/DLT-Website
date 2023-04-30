import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const DropDown = ({ submenus, dropdown }) => {
  return (
    <article id="dropdown" className={`dropdown ${dropdown ? "show" : ""}`}>
      <ul>
        {submenus.map((submenu) => (
          <li key={submenu.id} className="menuItems">
            <NavLink to={submenu.path}>{submenu.title}</NavLink>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default DropDown;
