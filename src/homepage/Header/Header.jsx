import "./Header.scss";
import { images } from "../../images";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header container">
      <div className="containerLeft">
        <h1>
          Home Of Web3 Learning And Incubation Program From
          <span> Ground Zero To Market-Fit Product.</span>
        </h1>
        <div className="applyBtn">
          <Link className="btn genBtn" to="/our-courses">
            Get Started
          </Link>
          <Link className="btn genBtn" to="/incubation">
            Apply For Incubation
          </Link>
        </div>
      </div>
      <div className="containerRight">
        <img src={images.hero} alt="Hero image" />
      </div>
    </header>
  );
};

export default Header;
