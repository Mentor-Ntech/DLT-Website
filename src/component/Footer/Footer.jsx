import './Footer.scss';
import { images } from '../../images';
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2, ImFacebook } from "react-icons/im";

const socials = [
  {
    icon: <AiOutlineTwitter />,
    link: 'https://www.twitter.com/'
  },
  {
    icon: <ImFacebook />,
    link: 'https://www.facebook.com/'
  },
  { 
    icon: <ImLinkedin2 />,
    link: 'https://www.LinkedIn.com/'
  },
]

const Footer = () => {
    return (
        <>
            {/* <div className='footer'>
        <div className='footCon'>
          <div className='contactBox'>
            <h4 className='infoDtl'>Contact  info:</h4>
            <div className='contactInfo'>
              <a href="dtlAfrica@gmail.com" target='_blank' rel='noopener noreferrer'><span>Email address:</span><small> dtlAfrica@gmail.com</small></a>
              <br />
              <a href="tel:+2348133085555" target='_blank' rel='noopener noreferrer'><span>Phone number:</span><small> +234 813 308 5555</small></a>
            </div>
            <div className='contactUs'>
              <h4 className='pText'>Need to talk to directly ? Contact Us&gt;</h4>
              <h5 className='followDlt'>Follow Dltafrical:</h5>
              <div className='footerIcon'>
                <ul className='item'>
                  <li className='itemLink'>
                    <a href="https://www.twitter.com/in/phuong-hoang-a0b4901a5/" target='_blank' rel='noreferrer'>
                      <h3><AiOutlineTwitter color='#1e90ff' /></h3>
                    </a>
                  </li>
                  <li className='itemLink'>
                    <a href="https://www.facebook.com/in/phuong-hoang-a0b4901a5/" target='_blank' rel='noreferrer'>
                      <h3><ImFacebook color='blue' /></h3>
                    </a>
                  </li>
                  <li className='itemLink'>
                    <a href="https://www.linkdin.com/in/phuong-hoang-a0b4901a5/" target='_blank' rel='noreferrer'>
                      <h3><ImLinkedin2 color='#291fd3' /></h3>
                    </a>
                  </li>

                </ul>
              </div>
            </div>

          </div>

          <div className='footerImage '>
            <img className='footerImg' src={images.hero} alt="" />
          </div>

          <div className='dltLOGO'>
            <img className='dltImg' src={images.dltlogo} alt="" />
            <p className='dltLoText'>...innovating through web3</p>
          </div>


        </div>


      </div> */}

            <div className="footer">
                <div className="footCon">
                    <div className='footerText'>
                        <h2 className='pText'>Contact info:</h2>
                        <div className='contactInfo'>

                            <a href="dtlAfrica@gmail.com" target='_blank' rel='noopener noreferrer'><span>Email address:</span><small> dtlAfrica@gmail.com</small></a>
                            <br />
                            <a href="tel:+2348133085555" target='_blank' rel='noopener noreferrer'><span>Phone number:</span><small> +234 813 308 5555</small></a>

                        </div>
                        <div className='reachOut'>
                            <h4>Need to talk to directly ? Contact Us&gt;</h4>
                            <h5>Follow Dltafrical:</h5>

                            <div className='footerIcon'>
                                <ul className='item'>
                                {socials.map((social, i) => (
                                  <li key={i} className='itemLink'>
                                    <a href={social.link}>
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
            </div>
        </>

    )
}

export default Footer