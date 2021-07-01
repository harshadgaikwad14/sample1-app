import React, { useState, Fragment } from "react";
import { v4 as uuid_v4 } from "uuid";
import TodoAddComponent from "./TodoAddComponent";
import TodoListComponent from "./TodoListComponent";

const TodosAppComponent = () => {
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
  };

  return (
    <Fragment>
      <div>
        <h1>Todos App</h1>
        <TodoAddComponent
          todoText={todoText}
          addTodoText={addTodoText}
          onChangeTodoText={onChangeTodoText}
        ></TodoAddComponent>
        <TodoListComponent
          todos={todos}
          onChangeTodoCheckBox={onChangeTodoCheckBox}
          deleteTodo={deleteTodo}
        ></TodoListComponent>
      </div>
    </Fragment>
  );
};

export default TodosAppComponent;
