import "./App.css";

import Examples from "./components/Examples";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="container">
      <h1>My Sample App</h1>
      <Examples></Examples>
      <Todos></Todos>
    </div>
  );
}

export default App;
