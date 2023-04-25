import { images } from "../../images";
import "./Network.scss";

const Network = () => {
  return (
    <section className="ourNetworkCon">
      <div className="title">
        <h2>OUR NETWORK</h2>
        <h4>
          Jorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </h4>
        <div className="paragraph">
          <p>
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
          <p className="pContent">
            Borem ipsum, dolor sit amet consectetur <br />
            adipisicing elit.
          </p>
          <p className="pContent">
            Borem ipsum, dolor sit amet consectetur <br />
            adipisicing elit.
          </p>
          <p className="pContent">
            Borem ipsum, dolor sit amet consectetur <br />
            adipisicing elit.
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
