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
import ChatShow from "./ChatComponents/ChatShow";
import Sidebar from "./UIKIT/Sidebar";
import MainLayout from "./FULLFINALCOMPS/MainLayout";
import AJ from "./UIKIT/AJ";
import axios from "axios";
import Position from "./FULLFINALCOMPS/Position";
import SignUpNow from "./FULLFINALCOMPS/SignUpNow";
import LottieControl from "./FULLFINALCOMPS/LottieControl";
import Landing from "./Landing";
import ChatShow2 from "./ChatComponents/ChatShow2";

class App extends Component {
  componentWillMount() {}
  render() {
    return (
      <div style={{ backgroundColor: "white" }} className="App">
        <Switch>
          {" "}
          <Route path="/" exact component={Landing} />
          <Route path="/showall" exact component={ChatShow2} />

          <Route path="/login" exact component={Login} />
          <Route path="/signup" component={SignUp2} />
          <Route path="/dashboard" component={MainLayout} />
        </Switch>
      </div>
    );
  }
}

export default App;
