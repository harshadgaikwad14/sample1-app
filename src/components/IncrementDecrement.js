import React, { useState, Fragment } from "react";

const IncrementDecrement = () => {
  const [counter, setCounter] = useState(0);

  const incrementCouter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <Fragment>
      <h3>Counter Example With Hook State</h3>
      <div className="input-group mb-3 w-25">
        <button className="btn btn-primary" onClick={decrementCounter}>
          -
        </button>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
          readOnly
          value={counter}
        />
        <button className="btn btn-primary" onClick={incrementCouter}>
          +
        </button>
      </div>
    </Fragment>
  );
};

export default IncrementDecrement;
