import "./OurTeam.scss";
import { useState, useEffect } from "react";

import { client, urlFor } from "../../apis/client";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Loader } from "rsuite";

const OurTeam = () => {
  // for data to query from sanity
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const query = '*[_type == "team"]';
    client
      .fetch(query)
      .then((data) => {
        setIsLoading(true);
        setTeam(data);
      })
      .catch((err) => {
        // console.log(err);
        setErrMsg("Network error");
      });
  }, []);

  return (
    <section className="ourTeam">
      <h2>OUR TEAM</h2>
      <p className="pText">Meet the DLT team</p>

      {!isLoading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: 100,
          }}
        >
          <h2>
            <Loader size="lg" inverse center content="Loading..." />
          </h2>
        </div>
      ) : (
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
      )}
    </section>
  );
};

export default OurTeam;
