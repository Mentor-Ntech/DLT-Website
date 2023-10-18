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
        point_one:'The basics of Ethereum and how it works.',
        point_two:'The Solidity programming language and how to write smart contracts using Solidity.',
        point_three:'Advanced Solidity concepts such as modifiers, inheritance, and error handling.',
        point_four:'Ethereum development tools and environment setup using Truffle and Ganache',
        point_five:'Interacting with smart contracts through the web3.js library for stunning interfaces',
        point_six:'Advanced contract topics such as events and optimization.',
        point_seven:'Security and best practices for writing secure and efficient smart contracts & Building and deploying a fully functional smart contract that solves a real-world problem'
      }
    },
  },
    {
      id: 3,
      question: "Prerequisites",
      answer:{
        subHeading: "You should have a computer with an internet connection and have access to a Solidity development environment such as Remix or Truffle. Familiarity with Ethereum and the Ethereum Virtual Machine (EVM) is also recommended.",
        unordered:{
          point_one:'Familiarity with basic programming concepts (variables, functions, loops, etc.)',
          point_two: 'Basic understanding of blockchain technology and cryptocurrencies',
          point_three:'Some experience with JavaScript is recommended but not require'
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
          point_five: 'Students will build different projects and create a portfolio that will be use to their first job'
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

  const  BlockchainFaq= () => {
    return (
        <section className="cdds" id="cdds">
          <div className="cddsWrapper">
            {cddsData.map(({ question, subHeading, answer, id }) => (
              <CourseDropdown key={id} question={question} answer={answer} subHeading={subHeading} />
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

export default BlockchainFaq;





