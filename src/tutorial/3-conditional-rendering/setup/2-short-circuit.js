import React, { useState } from "react";
// short-circuit evaluation
// ternary operator
//All functions used in the return fragment, must have to return a value.

const ShortCircuit = () => {
  const [text, setText] = useState("k");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>

      <h1>{text || "John Doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {text && <h1>Hello World</h1>}
      {!isError && <h1>Error...</h1>}
      {isError && <h1>There is no error...</h1>}
    </>
  );
};

export default ShortCircuit;
