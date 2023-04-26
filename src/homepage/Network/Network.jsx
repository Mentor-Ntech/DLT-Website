import { images } from "../../images";
import "./Network.scss";

const Network = () => {
  return (
    <section className="ourNetworkCon">
      <div className="title">
        <h2>OUR NETWORK</h2>
        <h4>Jorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        <div className="paragraph">
          <p className="pText pNetwork">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            placeat laborum voluptatem unde ab harum, illo repudiandae aliquam
            error quis deserunt, soluta beatae asperiores corrupti amet
            voluptate, nobis labore saepe pariatur! Omnis illum nemo hic soluta
            velit impedit eius, nihil et. Odio id saepe accusantium culpa velit
            exercitationem beatae dolor,
          </p>
        </div>
      </div>

      <div className="joinCon">
        <div className="joinCon2">
          <h2>HOW TO JOIN US</h2>
          <p className="pText pContent">
            We invite top talents from anywhere to join in-person learning
            experience for 6 months full time training plus additional 3 months
            of capstone project building and development.
          </p>
          <p className="pText pContent">
            Our Incubation Program is online and opened to all builders across
            Africa for 12 weeks of product development, mentorship, and
            all-inclusive support through out the program.
          </p>
        </div>

        <div className="networkPic">
          <img src={images.happy} alt="image" />
        </div>
      </div>
    </section>
  );
};
export default Network;
