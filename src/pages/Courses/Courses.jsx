import "./Courses.scss";

import { FiCalendar } from "react-icons/fi";
import { BiHourglass } from "react-icons/bi";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    url: "/our-courses/product-design",
    img: require("../../assets/product.png"),
    title: "UI/UX Design and Prototyping  (Product Design)",
    text: "User Interface (UI) and User Experience(UX) design are in great demand and are applicable across products and industry domain. With customer experience being the centerfold...",
    durationIcon: <FiCalendar />,
    duration: "2 months",
    classDurationIcon: <BiHourglass />,
    classDuration: "3 times a week",
  },
  {
    id: 2,
    url: "/our-courses/fullstack-dev",
    img: require("../../assets/fullstack.png"),
    title: "Fullstack Web Development",
    text: "Acquire the skills and knowledge needed build a complete web development project from scratch to finish.",
    durationIcon: <FiCalendar />,
    duration: "6 months",
    classDurationIcon: <BiHourglass />,
    classDuration: "4 times a week",
  },
  {
    id: 3,
    url: "/our-courses/frontend-dev",
    img: require("../../assets/frontend.png"),
    title: "Frontend Web Development",
    text: "Start off your career today as a Front-End Web Developer. Learn to build high quality websites with dynamic applications to create stunning user experiences…",
    durationIcon: <FiCalendar />,
    duration: "4 months",
    classDurationIcon: <BiHourglass />,
    classDuration: "4 times a week",
  },
  {
    id: 4,
    url: "/our-courses/blockchain-dev",
    img: require("../../assets/blockchain.png"),
    title: "Blockchain Development (Smart Contract)",
    text: "Acquire the skills and knowledge needed to be a Blockchain Developer",
    durationIcon: <FiCalendar />,
    duration: "3 Months",
    classDurationIcon: <BiHourglass />,
    classDuration: "2 times a week",
  },
];

const Courses = () => {
  return (
    <section className="courses container">
      <h2>Our Courses</h2>

      <div className="coursesOptions">
        {data.map((item) => (
          <Link to={item.url} className="coursesCard" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <small>{item.text}</small>
            <div>
              <p>{item.durationIcon}</p>
              <span>{item.duration}</span>
              <p>{item.classDurationIcon}</p>
              <span>{item.classDuration}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Courses;
