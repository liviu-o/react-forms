import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/Header.js";
import BodyComponent from "./components/Body.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/:id"
            children={
              <div>
                <HeaderComponent />
                <BodyComponent />
              </div>
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
