import React from "react";

const TodoListComponent = (props) => {
  const { todos, onChangeTodoCheckBox, deleteTodo } = props;
  return (
    <ul className="list-group">
      {todos.map((todo) => {
        return (
          <li className="list-group-item" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={(evt) => onChangeTodoCheckBox(evt, todo.id)}
            ></input>
            <span className={todo.isCompleted ? `completed` : null}>
              {todo.name}
            </span>
            <button
              className="btn btn-primary"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete Todo
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoListComponent;
