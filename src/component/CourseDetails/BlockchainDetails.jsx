import React from 'react';
import "./CourseDetails.scss";
import CourseDetail from './CourseDetail'
import { ImHourGlass } from "react-icons/im";
import { IoIosApps } from "react-icons/io";
import { BsListUl } from "react-icons/bs";
import { BsLayoutWtf } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";

const secData = [
  {
    id: 1,
    title: "Duration",
    text: "3 months",
    text: "(3times a week)",
    icon: <ImHourGlass />
  },
  {
    id: 2,
    title: "Start Date",
    text: "5th February, 2024",
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
    text: "2 Projects",
    icon: <IoIosApps/>
  },
  {
    id: 6,
    title: "Cost",
    text: "Free",
    icon: <CgBrowser/>
  },

];

const BlockchainDetails = () => {
  return (
    <section className='mainCon'>
      
        <div className='iconsCon'>
          {secData.map(({ title, text, text2, id, icon }) => (
            <CourseDetail 
              key={id} 
              title={title} 
              text={text} 
              text1={text2}
              icon={icon} // Pass the icon component directly
            />
          ))}
        </div>
      
    </section>
  );
};

export default BlockchainDetails;