import './About.scss';
import { images } from '../../images';

const listText = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nam facilis nesciunt harum alias voluptatum magnam quam odio amet consequatur autem, sint corrupti veritatis nihil.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nam facilis nesciunt harum alias voluptatum magnam quam odio amet consequatur autem, sint corrupti veritatis nihil.']
const About = () => {

  return (
    <section className='about container'>
      <div className="imgContainer">
        <img src={images.code} alt="code on vscode image" />
      </div>
      <div className="aboutTextCon">
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          tempore iste, dignissimos esse molestiae nemo.
        </h2>
        {listText.map((text, i) => (
          <p className='pText' key={i}>{text}</p>
        ))}

        <p className='pText absText'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores necessitatibus, pariatur nisi at harum iste est repellat, doloremque illo accusantium laborum officiis quas tempore consectetur dicta facere magnam expedita. Quas illo harum quia maiores autem.
        </p>
      </div>
    </section>

    

  )
}

export default About

