import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/routingdemo/pages/Home";
import AboutUs from "./components/routingdemo/pages/AboutUs";
import Contact from "./components/routingdemo/pages/Contact";
import Navbar from "./components/routingdemo/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/routingdemo/pages/NotFound";
import AddUser from "./components/routingdemo/users/AddUser";
import EditUser from "./components/routingdemo/users/EditUser";
import ViewUser from "./components/routingdemo/users/ViewUser";

function App() {
  return (
    <div className="App">
      {/** 
      <Examples></Examples>
      <TodosAppComponent></TodosAppComponent>
      */}
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={AboutUs}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/users/add" component={AddUser}></Route>
          <Route exact path="/users/edit/:id" component={EditUser}></Route>
          <Route exact path="/users/view/:id" component={ViewUser}></Route>
          <Route exact component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
