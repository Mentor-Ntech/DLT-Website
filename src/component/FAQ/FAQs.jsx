import React from "react";
import FAQ from "./FAQ";
import "./FAQs.scss";

const faqsData = [
  {
    id: 1,
    question:
      "What are the requirements to join the full stack software development training ?",
    answer:
      "Anyone with burnig passion to build solution that solve real world use cases are eligible to join. We appreciate people who already have idea of what they are looking to build but we encourage everyone to apply.",
  },
  {
    id: 2,
    question: "What is the overview of the training ?",
    answer:
      "The training is to take an absolute beginners from ground zero to a smart contract developer with the curriculum including HTML, CSS, UI/UX, Javascript, NodeJs, ReactJS and smart contract development with Solidity.",
  },
  {
    id: 3,
    question: "What are the key dates and how to apply for the training ?",
    answer:
      "The training is a 6 months of full-time intensive in-person classes plus additional 3 months of capstone project. Everyone willing to apply can submit their application for consideration.",
  },
  {
    id: 4,
    question:
      "What kind of company can participate in the incubation program ?",
    answer:
      "There are no restrictions on companies that can participate. Existing projects and new builders who wish to develop an inpact-driven projects using Web3 can apply.",
  },
  {
    id: 5,
    question: "What is the overview of the incubation program ?",
    answer:
      "The program is 3 months online program that include mentorship, management skills training, regular web3 session and networking events to help put the business in the right position. A demo day will be held during the final week, where there will be opportunity to pitch to global leaders and VC within Web3 space.",
  },
  {
    id: 6,
    question: "How to apply for the incubation program and key dates ?",
    answer:
      "After submitting the application on our website, we will sent an email to confirm the application has been recieved. We will also follow up to schedule a time for screening and interview for successfull application. Only the one who are successful after the interview will be selected to participate in the incubation program. The timeline from application to when successful application will be announced is eight weeks.",
  },
];

const FAQs = () => {
  return (
    <section className="faqs container" id="faqs">
      <h3>FAQs</h3>
      <div className="faqsWrapper">
        {faqsData.map(({ question, answer, id }) => (
          <FAQ key={id} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;