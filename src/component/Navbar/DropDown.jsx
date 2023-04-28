import "./Navbar.scss";

const DropDown = ({ submenus, dropdown }) => {
  return (
    <article id="dropdown" className={`dropdown ${dropdown ? "show" : ""}`}>
      <ul>
        {submenus.map((submenu) => (
          <li key={submenu.id} className="menuItems">
            <a href={submenu.path}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default DropDown;
