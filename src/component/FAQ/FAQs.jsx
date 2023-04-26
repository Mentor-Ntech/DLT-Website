import React from "react";
import FAQ from "./FAQ";
import "./FAQs.scss";

const faqsData = [
  {
    id: 1,
    question:
      "What is Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ",
    answer:
      "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 2,
    question:
      "What is Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ",
    answer:
      "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 3,
    question:
      "What is Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ",
    answer:
      "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 4,
    question:
      "What is Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ",
    answer:
      "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 5,
    question:
      "What is Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ",
    answer:
      "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 6,
    question:
      "What is Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ",
    answer:
      "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
];

const FAQs = () => {
  return (
    <section className="faqs container">
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
