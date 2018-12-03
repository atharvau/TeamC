import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

import FinalChat from "./ChatComponents/FinalChat";
import SignUp2 from "./Auth/SignUp2";
import Login from "./Auth/Login";

import FinalTodo from "./ChatComponents/FinalTodo";

import { Provider } from "unstated";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/signup" component={SignUp2} />
          <Route path="/dashboard" component={FinalChat} />
          <Route path="/todo" component={FinalTodo} />
          <Provider>
            {" "}
            <Route path="/login" component={Login} />
          </Provider>
          
        </Switch>
      </div>
    );
  }
}

export default App;
