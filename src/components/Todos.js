import React, { useState, Fragment } from "react";
import { v4 as uuid_v4 } from "uuid";

const Todos = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    { id: "1", name: "First Todo", isCompleted: false },
    { id: "2", name: "Second Todo", isCompleted: true },
  ]);

  const onChangeTodoText = (evt) => {
    console.log(evt.target.value);
    setTodoText(evt.target.value);
  };

  const onChangeTodoCheckBox = (evt, todoId) => {
    console.log("Id : " + todoId + " - event : " + evt.target.value);

    const updateTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        if (todo.isCompleted) {
          todo.isCompleted = false;
        } else {
          todo.isCompleted = true;
        }
        return todo;
      }
      return todo;
    });

    setTodos(updateTodo);
  };

  const addTodoText = () => {
    console.log(uuid_v4());
    const newTodo = {
      id: uuid_v4(),
      name: todoText,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
    setTodoText("");
    };
    
    const deleteTodo = (todoId) => {

        const deleteTodo = todos.filter((todo) => todo.id !== todoId);
        setTodos(deleteTodo);
    }

  return (
    <Fragment>
      <div>
        <h1>Todos App</h1>
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
                <button className="btn btn-primary" onClick={()=>deleteTodo(todo.id)}>
                  Delete Todo
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Todos;
