import React, {useState, useEffect} from 'react';

// import { images } from 'assets';

import './OurTeam.scss';
import { client, urlFor} from '../../client';
import images from '../../images/images';

// const team = [
//   {name: 'Aliu Musa', position: 'Director', desceiption: 'i am a good developer', imgUrl: images},
// ]

const OurTeam = () => {
  const [team, setTeam] = useState([])

  useEffect(() => {
    const query = '*[_type == "team"]';
    client.fetch(query)
    .then((data) => setTeam(data))
  }, [])

  return (
    <section className='ourTeam'>
      <h2>OUR TEAM</h2>
      <p className='pText'>Meet the DLT team</p>
      <div className='profileCard directorCard'>
          <img src={images.Director}/>
          <h3>Aliu Musa</h3>
          <h3 className='position'>Director</h3>
          <p className='pText'>
            "Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
            ac aliquet odio mattis. Class aptent taciti 
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          </p>
        </div>
      <div className='profileContainer'>
        {team.map((team, index) => (
          <div key={index} className='profileCard'>
            <img src={urlFor(team.imgUrl)} alt={team.title} />
            <h3>{team.name}</h3>
            <h3 className='position'>{team.position}</h3>
            <p className='pText'>"{team.description}"</p>
          </div>
        ))}
      </div>
    </section>
    
  )
}

export default OurTeam