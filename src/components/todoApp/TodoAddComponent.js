import React from "react";

const TodoAddComponent = (props) => {
  const { todoText, addTodoText, onChangeTodoText } = props;
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={todoText}
        onChange={(evt) => onChangeTodoText(evt)}
      />
      <button className="btn btn-primary" onClick={addTodoText}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoAddComponent;
