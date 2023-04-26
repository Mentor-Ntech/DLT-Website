import "./About.scss";
import { images } from "../../images";

const listText = [
  "We engage top talents in a cohort based learning experience, taking them through full-stack software development and smart contract development.",
  "Our training is  project based, with each cohort building up to 20 realword projects through their training with a final capstone project solving real world use cases with Web3.",
];
const About = () => {
  return (
    <section className="about container" id="about">
      <div className="imgContainer">
        <img src={images.code} alt="code on vscode image" />
      </div>
      <div className="aboutTextCon">
        <h2>
          At DLT Africa, one of our missions is to help build Web3 talents from
          ground zero, through full-stack and smart contract developments.
        </h2>
        {listText.map((text, i) => (
          <p className="pText" key={i}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
