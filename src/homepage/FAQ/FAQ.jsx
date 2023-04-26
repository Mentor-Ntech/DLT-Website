import { useState } from "react";
import "./FAQs.scss";

import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const FAQ = ({ question, answer }) => {
  const [isFaqShowing, setIsFaqShowing] = useState(false);

  return (
    <div className="faq" onClick={() => setIsFaqShowing((prev) => !prev)}>
      <article>
        <h4>{question}</h4>
        <button className="faqIcon">
          {isFaqShowing ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </button>
      </article>
      {isFaqShowing && <p className="pText faqText">{answer}</p>}
    </div>
  );
};

export default FAQ;
