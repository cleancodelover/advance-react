import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
// It executes functions outside of the component
//UseEffect doesn't run on initial render, but if you want it to run on initial render,
//you willpass in a second parameter in an empty array
//NB: You can have more than one useEffects in a component.
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
