import React, { useState, Fragment } from "react";

const UseStateExample = () => {
  const [message, setMessage] = useState("UseSate Example");

  const updateMessageValue = (updatedValue) => {
    console.log("Updating message vallue : " + updatedValue);
    setMessage(updatedValue);
  };

  return (
    <Fragment>
      <h3>Message Example With Hook State</h3>
      <h2>{message}</h2>
      <button onClick={() => updateMessageValue("NEW VAULE")}>
        Update Message Value
      </button>
    </Fragment>
  );
};

export default UseStateExample;
