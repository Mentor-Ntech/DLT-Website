import React from 'react';
import "./CourseDetails.scss";

const CourseDetail = ({ title, text,text1, icon }) => {
  return (
    <div className='courseCon'>
      <div className='iconBody'>
        <article>
        <div className='icons' style={{color: '#34D1A1'}}>{icon}</div> 
          <span>{title}</span>
          <h5>{text}</h5>
          <h5>{text1}</h5>
        </article>
      </div>
    </div>
  );
};

export default CourseDetail;