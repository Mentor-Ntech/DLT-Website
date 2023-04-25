import { useState, useEffect } from "react";

import "./OurTeam.scss";
import { client, urlFor } from "../../api/client";
import images from "../../images/images";

const OurTeam = () => {
  // for data to query from sanity
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const query = '*[_type == "team"]';
    client.fetch(query).then((data) => setTeam(data));
  }, []);

  return (
    <section className="ourTeam">
      <h2>OUR TEAM</h2>
      <p className="pText">Meet the DLT team</p>



      <div className="profileContainer">
        {team.map((team, index) => (
          <div key={index} className="profileCard">
            <img src={urlFor(team.imgUrl)} alt={team.title} />
            <h3>{team.name}</h3>
            <h3 className="position">{team.position}</h3>
            <p className="pText">"{team.description}"</p>

            <div className="socialIcon">
              <a href={team.linkedinLink} target="_blank">
                <FaLinkedinIn />
              </a>

              <a href={team.twitterLink} target="_blank">
                <FaTwitter />
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
