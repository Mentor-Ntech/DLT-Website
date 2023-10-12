import "./CourseSections.scss";
import { Link } from "react-router-dom";

const CourseSection = (props) => {
  return (
    <>
      {/* <div className="courseCon">
      <div className="courseBody">
        <div className="cousersBox">
          <h4>{props.title}</h4>
          <p>{props.text}</p>
          <div className="btn">
            <Link className="btn1" to="/training">
              Apply Now
            </Link>

            <button className="btn2">{props.button2}</button>
          </div>

         
        </div>
      </div>

      {/* <div className="imageBox">
        
      </div> 
    </div> */}

      <section className="coursesCon">
        <div className="course__content">
          <div className="coursesTextBox flex-items">
            <h4>{props.title}</h4>
            <p>{props.text}</p>

            <div className="btn">
              <Link className="btn__primary" to="/training">
                Apply Now
              </Link>

              <button className="btn__secondary">{props.button2}</button>
            </div>
            <p className="coursesPara">{props.headline}</p>
          </div>

          <div className="coursesImg flex-items">
            <img src={props.img} alt={props.title} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseSection;
