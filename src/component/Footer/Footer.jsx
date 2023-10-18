import "./Footer.scss";
import { images } from "../../images";
import { AiOutlineTwitter } from "react-icons/a
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const socials = [
  {
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/dlt_africa",
  },
  {
    icon: <AiFillFacebook />,
    link: "https://www.facebook.com/DLTAfrica",
  },
  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/company/dlt-africa/",
  },
];

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footCon">
        <div className="footerText">
          <h2 className="pText">Contact info:</h2>
          <div className="contactInfo">
            <a
              href="mailto:info@dltafrica.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Email address:</span>
              <small> info@dltafrica.io</small>
            </a>
            <br />
            <a
              href="tel:+2348156509701"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Phone number:</span>
              <small> +234 815 650 9701</small>
            </a>
          </div>
          <div className="reachOut">
            <h5>Follow DLTAfrica:</h5>
          <p className="missionText">
          To help build Web3 talents from ground zero, 
          through full-stack and smart contract developments.
          </p>
        </div>
        <div className="quickCon items">
          <h2 className="quick">Quick Links</h2>
          <ul className="quickText">
            {quickLinks.map((quickLink) => {
              <MenuItems items={quickLink} key={quickLink.id} />;
            })}
            <li>
              <div />
              <a href="#about">About Us</a>
            </li> 
            <ul id="footItemList">
              {footMenuItems.map((footMenuItem) => {
                <MenuItems items={footMenuItem} key={footMenuItem.path}/>
               
              })}
              <li>
                < div/>
                <a href="/team">Our team</a>
              </li>
            </ul>
            <li>
              <div />
              <a href="#faqs">
                FAQ<span>s</span>
              </a>
            </li>
            
            
          </ul>
        </div>
        <div className="contact items">
          <div className="contactCon">
            <h2 className="contactText">Contact Us:</h2>
            <div className="contactInfo">
              <p className="offAddress">
                2, Sheikh Zakariyah Adebayo Yusuf Street, <br /> PEGAMUT,
                102112, Ota, Ogun State.
              </p>
              <a
                href="mailto:info@dltafrica.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="emailBox">Email address:</span>
                <small> info@dltafrica.io</small>
              </a>
              <br />
              <a
                href="tel:+2348156509701"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Phone number:</span>
                <small> +234 815 650 9701</small>
              </a>
            </div>
          </div>
        </div>
        <div className="footerImg">
          <img src={images.hero} alt="" />
        </div>
      </div>

      <div className="dltLogo">
        <img src={images.dltlogo} alt="dlt-footer img" />
        <p className="pText">...innovating through web3</p>
      </div>
    </footer>
  );
};

export default Footer;
