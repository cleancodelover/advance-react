import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  //You can import as it is done in useCase basics or you can access it directly
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  //To create a fragment, you can also use an empty angle
  //brackets like <> fragment content goes here</>

  //Note that the arrow function used in the onclick and any other event
  //is necessary because without it, the function will be fired immediately
  //when the component is loaded
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
