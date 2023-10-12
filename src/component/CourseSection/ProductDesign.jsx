import React from "react";
import CourseSection from "./CourseSection";
// import courseImg from "../../assets/course-sec.png";

import "./CourseSections.scss";

const sectionData = [
  {
    id: 2,
    title: "UI/UX Design and Prototyping (Product Design)",
    text: "Acquire the skills and knowledge needed build a complete web development project from scratch to finish. Our Full-Stack Developer’s Program is a 6 months program.",
    button1: "Apply Now",
    button2: "Speak To A Learning Advisor",
    headline: "Applications are currently Open!",
    img: require("../../assets/ProductHero.png"),
  },
];

const ProductDesign = () => {
  return (
    <section className="course" id="course">
      <>
        <div>
          {sectionData.map(
            ({ title, text, button1, button2, headline, id, img }) => (
              <CourseSection
                key={id}
                title={title}
                text={text}
                button1={button1}
                button2={button2}
                headline={headline}
                img={img}
              />
            )
          )}
        </div>
      </>
    </section>
  );
};

export default ProductDesign;
