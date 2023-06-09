import "./Footer.scss";
import { images } from "../../images";
import { AiOutlineTwitter } from "react-icons/ai";
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

            <div className="footerIcon">
              <ul className="item">
                {socials.map((social, i) => (
                  <li key={i} className="itemLink">
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
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
