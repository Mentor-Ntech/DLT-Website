import CourseDropdown from "./CourseDropdown";
import { Link } from "react-router-dom";

const cddsData = [
  {
    id: 1,
    question: "About this Course",
    answer: {
      pOne:"UI (User Interface) pertains to a product's visual and interactive design, focusing on layout and aesthetics. UX (User Experience) covers the holistic user journey, ensuring an enjoyable, efficient experience through research, user-centric design, and usability testing. Together, UI and UX create products that are visually appealing and user-friendly."
    },
  },
  {
    id: 2,
    question: "What you will Learn",
    answer:{
        unordered:{
          point_one:'Are you ready to embark on an exciting journey into the world of product design? Our comprehensive Product Design Course is designed to equip you with the knowledge, skills, and tools necessary to excel in this dynamic field. Here is a glimpse of what you can expect to learn during this engaging course:',
          point_two:'Understanding the Fundamentals',
          point_three:'Design Research and User Analysis',
          point_four:'Ideation and Concept Development',
          point_five:'Prototyping and Testing',
          point_six:'Understanding User Interface and Experience',
          point_seven:'Real - World Projects and Case Studies'
        }
      },
  },
    {
      id: 3,
      question: "Prerequisites",
      answer:{
        unordered:{
          point_one:'A computer on which you can install software (Windows, MacOS, or Linux)',
          point_two:'No prior programming experience is required. We will start from the very basics'
        }
      },

    },
    {
      id: 4,
      question: "Course Outline",
      answer:{
        unordered:{
          point_one:'Fundamentals of Design, Design Research and User Analysis, Ideation and Concept Development',
          point_two:'Prototyping and Testing, User Interface (UI) and User Experience (UX) Design',
          point_three:'Tools and Real-World Projects, Professional Development',
          point_four: '2 Projects'
        }   
      }
    },
    {
      id: 5,
      question: "Class Schedule",
      answer: {
        unordered:{
          point_one:'Wednesdays, Fridays, Saturdays'
        }
      },
    },
  ];

  const ProductDesignFaq = () => {
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

export default ProductDesignFaq;