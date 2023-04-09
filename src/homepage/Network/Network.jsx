import './Network.scss';
import { client, urlFor } from '../../client';
import { useState, useEffect } from 'react';

const Network = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const query = '*[_type == "team"]';
    client.fetch(query)
    .then((data) => {
      setTeam(data);
    })
  }, [])
  


  return (
    <>
      <h1>Hi, awayu</h1>
      {team.map((team) => (
        <div>
          {team.name}
        </div>
      ))}
    </>
  )
}

export default Network