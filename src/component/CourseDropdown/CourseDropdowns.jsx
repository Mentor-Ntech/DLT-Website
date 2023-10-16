import React from "react";
import CourseDropdown from "./CourseDropdown";
import { Link } from "react-router-dom";
// import "./CourseDropdowns.scss";

const cddsData = [
  {
    id: 1,
    question: "About this Course",
    answer: {
      pOne:"Anyone with a burning passion to build solutions that solve real-world use cases is eligible to join. We appreciate people who already have an idea of what they are looking to build, but we encourage everyone to apply."
    },
  },
  {
    id: 2,
    question: "What you will Learn",
    answer: {
      pOne: "Our full stack software development course follows a step-by-step approach to helping you learn irrespective of your prior knowledge of tech, until you can build your own web applications from scratch.",
      pTwo: "Students will learn through an instructor-led training program while working on assignments and class projects for the first 3 months. The last 3 months will be for learning and working on real-life projects with mentors four days a week.",
      ordered: {
        pointHead: 'THE PROGRAM IS DESIGNED IN 4-PARTS',
        pointOne: 'Product Design',
        pointTwo: 'Frontend Web Development',
        pointThree: 'Backend Web Development',
        pointFour: 'Agile Project Management'
      },
    },
  },
    {
      id: 3,
      question: "Prerequisites",
      answer:{
        unordered:{
          point_one:'A computer on which you can install software (Windows, MacOS, or Linux)',
          point_two:'6 Months to learn and work hard to build a career in tech.',
          point_three:'No prior programming experience is required. We will start from the very basics'
        }
      },

    },
    {
      id: 4,
      question: "Course Outline",
      answer:{
        unordered:{
          point_one:'A computer on which you can install software (Windows, MacOS, or Linux)',
          point_two:'6 Months to learn and work hard to build a career in tech.',
          point_three:'No prior programming experience is required. We will start from the very basics'
        }
      }
    },
    {
      id: 5,
      question: "Class Schedule",
      answer: {
        unordered:{
          point_one:'Days of Class: Mondays, Tuesdays, Thursdays, and Frdays.'
        }
      },
    },
  ];

  const CourseDropdowns = () => {
    return (
        <section className="cdds container" id="cdds">
          <div className="cddsWrapper">
            {cddsData.map(({ question, answer, id }) => (
              <CourseDropdown key={id} question={question} answer={answer} />
            ))}
          </div>
          <div className="btn">
            <Link className="a" to="/training">
              Apply Now
            </Link>
          </div>
        </section>
      );
}

export default CourseDropdowns;