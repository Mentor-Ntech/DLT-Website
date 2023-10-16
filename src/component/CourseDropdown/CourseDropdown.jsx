import { useState } from "react";
import "./CourseDropdown.scss";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const CourseDropdown = ({ question, answer }) => {
  const [isFaqShowing, setIsFaqShowing] = useState(false);

  const renderOrderedContent = (ordered) => {
    return (
      <div>
        <h6>{ordered.pointHead}</h6>
        <ol>
          <li>{ordered.pointOne}</li>
          <li>{ordered.pointTwo}</li>
          <li>{ordered.pointThree}</li>
          <li>{ordered.pointFour}</li>
        </ol>
      </div>
    );
  };

  const renderUnorderedContent = (unordered) => {
    return (
      <div>
        <ul>
          {Object.keys(unordered).map((key) => (
            <li key={key}>{unordered[key]}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderAnswer = () => {
    if (typeof answer === "string") {
      return <p className="pText cddText">{answer}</p>;
    } else if (typeof answer === "object") {
      return (
        <div className="content">
          <p className="pText cddText">{answer.pOne}</p>
          <p className="pText cddText">{answer.pTwo}</p>
          {answer.ordered && renderOrderedContent(answer.ordered)}
          {answer.unordered && renderUnorderedContent(answer.unordered)}
        </div>
      );
    }
  };

  return (
    <div className="cdd" onClick={() => setIsFaqShowing((prev) => !prev)}>
      <article>
        <h4><li>{question}</li></h4>
        <button className="cddIcon">
          {isFaqShowing ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </article>
      {isFaqShowing && renderAnswer()}
    </div>
  );
};

export default CourseDropdown;