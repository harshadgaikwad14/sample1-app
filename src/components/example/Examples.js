import React, { Fragment } from "react";
import UseStateExample from "./UseStateExample";
import PropsExample from "./PropsExample";
import IncrementDecrement from "./IncrementDecrement";
import ListExample from "./ListExample";

const Examples = () => {
  return (
    <Fragment>
      <PropsExample></PropsExample>
      <UseStateExample></UseStateExample>
      <IncrementDecrement></IncrementDecrement>
      <ListExample></ListExample>
    </Fragment>
  );
};
export default Examples;
