import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const changeMessage = () => {
    //Note that the useState is receiving an object so you can not pass in a variable
    //so we need to use the ... spread operator the simply change the message or we can also
    //say person.message = 'message here' then set in setPerson
    setPerson({ ...person, message: "hello world" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
