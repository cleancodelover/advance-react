import React from "react";
import { useState } from "react";

const ErrorExample = () => {
  let title = "random title";

  const [text, setText] = useState("Random Text");

  const handleClick = () => {
    title = "hello people";
    setText("Peter has changed this text");
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
