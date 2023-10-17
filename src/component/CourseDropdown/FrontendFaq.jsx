import CourseDropdown from "./CourseDropdown";
import { Link } from "react-router-dom";

const cddsData = [
  {
    id: 1,
    question: "About this Course",
    answer: {
      pOne:"The course is designed to provide a comprehensive introduction to Ethereum smart contract development. Students will learn how to develop and deploy smart contracts on the Ethereum blockchain using the Solidity programming language. They will also learn how to interact with smart contracts using web3.js and other Ethereum development tools."
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
          point_two:'4 Months to learn and work hard to build a career in tech.',
          point_three:'No prior programming experience is required. We will start from the very basics'
        }
      },

    },
    {
      id: 4,
      question: "Course Outline",
      answer:{
        unordered:{
          point_one:'Introduction to Ethereum',
          point_two:'Setting up the Development Environment',
          point_three:"Writing Solidity Contracts & Deploying Contracts",
          point_four: 'Interacting with Contract & Advanced Contract Topics',
          point_five: 'Security and Best Practices',
          point_six: 'Final Project'
        }   
      }
    },
    {
      id: 5,
      question: "Class Schedule",
      answer: {
        unordered:{
          point_one:'Days of Class: Wednesdays, fridays and saturdays.'
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