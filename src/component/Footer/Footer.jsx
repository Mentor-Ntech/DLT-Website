import "./Footer.scss";
import { images } from "../../images";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import MenuItems from "../Navbar/MenuItems";

const quickLinks = [
  // { title: "About Us", url: "#" },
  { title: "Our Team", url: "/team" },
  // { title: "FAQs", url: "#" },
];

const footMenuItems = [
  { title: "Home", id: 1, path: "/" },
  { title: "Our Team", id: 2, path: "/team" },
];

const socials = [
  {
    icon: <AiFillFacebook />,
    link: "https://www.facebook.com/DLTAfrica",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.linkedin.com/company/dlt-africa/",
  },
  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/company/dlt-africa/",
  },
  {
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/dlt_africa",
  },
  {
    icon: <AiFillGithub />,
    link: "https://www.linkedin.com/company/dlt-africa/",
  },
];

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footerBox">
        <div className="dltLogo item">
          <a href="/">
            <img src={images.dltlogo2} alt="dlt-footer img" />
            <p className="footerText">...innovating through web3</p>
          </a>
        </div>
        <div className="missionCon items">
          <h2 className="mission">Our Mission</h2>

          <p className="missionText">
            Worem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio
            mattis.
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
      </div>
      <div className="footerIcon">
        <ul className="item">
          {socials.map((social, i) => (
            <li key={i} className="itemLink">
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
