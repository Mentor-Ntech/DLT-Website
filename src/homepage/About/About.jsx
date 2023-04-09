import './About.scss';
import { images } from '../../images';

const About = () => {
  return (
    <>
      <div className="sectionAbout">
        <div className="aboutCon">
          
          <img src={images.code} alt="" />
          <div className="aboutText">
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              tempore iste, dignissimos esse molestiae nemo.
            </h2>
            <p className='pText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nam facilis nesciunt harum alias voluptatum magnam quam odio amet consequatur autem, sint corrupti veritatis nihil.</p>
            <p className='pText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente inventore itaque sequi magni quaerat quos
             exercitationem dolore ea at! Accusantium amet ipsam ipsa at tenetur?</p>
          </div>
              
        </div>
        <div className='aboutPlay'></div>
          <h5 className='pText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Quas veniam eos doloribus odio illo! Esse, molestias. Sapiente ea, 
           alias consectetur, minus dolor, eos earum culpa nobis illo eligendi 
           optio! Sint fugit dolorum nulla iure pariatur eaque fuga incidunt 
           voluptatum reprehenderit.
           </h5>

      </div>
    </>

  )
}

export default About