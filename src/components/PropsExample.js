import React from "react";

const ChildComponent = (props) => {
  console.log(props);
  return <h3>Data Getting From Parent To Child : {props.msg}</h3>;
};

const ParentComponent = () => {
  return <ChildComponent msg="Hello Child"></ChildComponent>;
};

const PropsExample = () => {
  return (
    <div>
      <h3>Props Example Passing Value From Parent To Child</h3>
      <ParentComponent></ParentComponent>
    </div>
  );
};

export default PropsExample;
