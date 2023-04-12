<<<<<<< HEAD
import './Header.scss';
=======
import "./Header.scss";
import { images } from "../../images";

import { Link } from "react-router-dom";
>>>>>>> a0ee063afce52c5944816656fbf6a52a28fa28f2

const Header = () => {
  return (
    <header className="header container">
      <div className="containerLeft">
        <h1>
          Corem ipsum dolor sit amet, <span>consectetur adipiscing elit.</span>
        </h1>
        <div className="btn genBtn">
          <Link to="/join">Apply Now</Link>
        </div>
      </div>
      <div className="containerRight">
        <img src={images.hero} alt="Hero image" />
      </div>
    </header>
  );
};

export default Header;
