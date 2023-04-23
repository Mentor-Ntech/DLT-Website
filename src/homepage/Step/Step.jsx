import './Step.scss';
import {images} from '../../images'

const Step = () => {
  return (
    <section className='sectionStep'>
      <h2 className='stepHeading'>
      Jorem ipsum dolor sit amet, consectetur adipiscing elit. 
      <span>vulputate libero et velit interdum,
      acaliquet odio mattis.</span>
      </h2>

      <div className='stepCon'>
       
        <p className='pText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. 
          Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
        </p>          
          <img src={images.step} alt=""/>
      </div>
    </section>
  )
}

export default Step