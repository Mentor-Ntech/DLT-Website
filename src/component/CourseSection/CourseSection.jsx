// import CourseSections from "./CourseSections"
//import CourseSections from "./CourseSections"
import "./CourseSections.scss";

const CourseSection = (props) => {
  return (
    <div className="courseCon">
      <div className="courseBody">
        <article>
          <h4>{props.title}</h4>
          <p>{props.text}</p>
          <div className="btn">
            <button className="btn1">{props.button1}</button>
            <button className="btn2">{props.button2}</button>
          </div>

          <p>{props.headline}</p>
        </article>
      </div>

      <div className="imageBox">
        <img src={props.img} alt={props.title} />
      </div>
    </div>
  );
};

export default CourseSection;
