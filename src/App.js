import "./App.css";

import Examples from "./components/Examples";
import TodosAppComponent from "./components/todoApp/TodosAppComponent";

function App() {
  return (
    <div className="container">
      <h1>My Sample App</h1>
      <Examples></Examples>
      <TodosAppComponent></TodosAppComponent>
    </div>
  );
}

export default App;
