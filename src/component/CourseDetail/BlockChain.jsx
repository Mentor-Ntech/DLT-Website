import React from 'react';
import "./CourseDetails.scss";
import CourseDetail from './CourseDetail'
import { ImHourGlass } from "react-icons/im";
import { IoIosApps } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { BsLayoutWtf } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";

const secData = [
  {
    id: 1,
    title: "Duration",
    text: "6 months",
    text: "(4times a week)",
    icon:  <ImHourGlass />
  },
  {
    id: 2,
    title: "Start Date",
    text: "8th January, 2023",
    icon: <SlCalender />
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
    text: " ₦570,000",
    icon: <CgBrowser/>
  },

];

const BlockChain = () => {
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

export default BlockChain;
