import "./Step.scss";
import { images } from "../../images";

const Step = () => {
  return (
    <section className="sectionStep">
      <h2 className="stepHeading">
        DLT Africa Incubation Program To Support
        <span> Web3 Builders.</span>
      </h2>

      <div className="stepCon">
        <p className="pText">
          Our Web3 Incubation Program provides comprehensive support for web3
          builders. Builders will receive mentorship, get feedback, have
          opportunity to share session with other top builders across many
          successful Web3 projects at no cost.
          <br />
          <br />
          Builders will also have the chance to utilize different resources from
          our partners as well as receiving technical support through the
          program.
          <br />
          <br />
          The Web3 Incubation Program is fully online and invite participants
          across Africa buildings or willing to build in the Web3 space. We also
          welcome web2 builders willing to find a web3 strategy for their
          products.
        </p>
        <img src={images.step} alt="step to incubation program" />
      </div>
    </section>
  );
};

export default Step;
