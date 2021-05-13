import React from "react";
import { useState } from "react";

const ErrorExample = () => {
  const [title, setText] = useState("Random Text");

  const handleClick = () => {
    if (title === "Random Text") {
      setText("Peter has changed this text");
    } else {
      setText("Random Text");
    }
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
  // return <h2>useState error example</h2>;
};

export default ErrorExample;
