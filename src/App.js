import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import QuestionType from "./components/QuestionType";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Buttons from "./components/Buttons";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="d-flex justify-content-center align-items-center">
            <h1 style={{ color: "green" }}>Survey Tiger</h1>
          </div>
          <div className="survey">
            <Switch>
              <Route exact path="/">
                <Buttons />
              </Route>
              <Route exact path="/queType">
                <QuestionType />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
