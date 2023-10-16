import CourseDropdown from "./CourseDropdown";
import { Link } from "react-router-dom";

const cddsData = [
  {
    id: 1,
    question: "About this Course",
    answer: {
      pOne:"Frontend development is the process of creating the user interface and user experience of a website. It's what users see and interact with when they visit a site in a web browser. The frontend, also known as the 'client-side,' focuses on the visual and interactive elements of a website"
    },
  },
  {
    id: 2,
    question: "What you will Learn",

    answer:{
      unordered:{
        point_one:'fundamentals.',
        point_two:'Dynamic web development.',
        point_three:'Responsive design for all devices',
        point_four:'Popular front-end frameworks and libraries.',
        point_five:'principles for stunning interfaces'
      }
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
          point_one:'HTML Basics',
          point_two:'CSS Styling.',
          point_three:'JavaScript Fundamentals',
          point_four: 'Introduction to React ',
          point_five: 'Students will build different projects and create a portfolio that be used to their first job'
        }   
      }
    },
    {
      id: 5,
      question: "Class Schedule",
      answer: {
        unordered:{
          point_one:'Days of Class: Mondays, Tuesdays, Wednesdays and Thursdays.'
        }
      },
    },
  ];

  const FrontendFaq = () => {
    return (
        <section className="cdds" id="cdds">
          <div className="cddsWrapper">
            {cddsData.map(({ question, answer, id }) => (
              <CourseDropdown key={id} question={question} answer={answer} />
            ))}
          </div>
          <div className="btn">
            <Link className="a" to="/training">
              Get Started
            </Link>
          </div>
        </section>
      );
}

export default FrontendFaq;