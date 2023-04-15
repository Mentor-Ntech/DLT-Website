import "./Header.scss";
import { images } from "../../images";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
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
