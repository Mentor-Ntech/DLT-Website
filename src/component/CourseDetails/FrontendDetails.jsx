import React from 'react';
import "./CourseDetails.scss";
import CourseDetail from './CourseDetail'
import { IoIosApps } from "react-icons/io";
import { ImHourGlass } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { BsListUl } from "react-icons/bs";
import { BsLayoutWtf } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";

const secData = [
  {
    id: 1,
    title: "Duration",
    text: "4 months",
    text2: "(4times in a week)",
    icon: <ImHourGlass />
    

  },
  {
    id: 2,
    title: "Start Date",
    text: "8th January, 2024",
    icon: <SlCalender />
    
  },
  {
    id: 3,
    title: "Level",
    text: "Beginner",
    icon: <IoIosApps/>
  },
  {
    id: 4,
    title: "Prerequisites",
    text: "Laptop",
    icon: <BsListUl/>
  },
  {
    id: 5,
    title: "Projects",
    text: "4 Projects",
    icon: <BsLayoutWtf/>
  },
  {
    id: 6,
    title: "Cost",
    text: " ₦370,000",
    icon: <CgBrowser/>
  },

];

const FrontendDetails = () => {
  return (
    <section className='mainCon'>

        <div className='iconsCon'>
          {secData.map(({ title, text, id, icon }) => (
            <CourseDetail 
              key={id} 
              title={title} 
              text={text} 
              icon={icon} // Pass the icon component directly
            />
          ))}
        </div>

    </section>
  );
};

export default FrontendDetails;