import React from 'react';
import "./CourseDetails.scss";
import CourseDetail from './CourseDetail'
import { ImHourGlass } from "react-icons/im";
import { IoIosApps } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { BsLayoutWtf } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";

const secData = [
  {
    id: 1,
    title: "Duration",
    text: "3 months",
    text: "(3times a week)",
    icon:  < SlCalender/>
  },
  {
    id: 2,
    title: "Start Date",
    text: "5th February, 2024",
    icon: < ImHourGlass/>
  },
  {
    id: 3,
    title: "level",
    text: "Beginner",
    icon: <BsLayoutWtf />
  },
  {
    id: 4,
    title: "Presecutive",
    text: "Laptop",
    icon: <AiOutlineMenu/>
  },
  {
    id: 5,
    title: "Projects",
    text: "5 Projects",
    icon: <IoIosApps/>
  },
  {
    id: 6,
    title: "cost",
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