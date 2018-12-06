import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

import FinalChat from "./ChatComponents/FinalChat";
import SignUp2 from "./Auth/SignUp2";
import Login from "./Auth/Login";

import FinalTodo from "./ChatComponents/FinalTodo";

import { Provider } from "unstated";
import ReduxDemo from "./redux/ReduxDemo ";
import Uikit from "./UIKIT/Uikit";
import Uikit2 from "./UIKIT/Uikit2";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
