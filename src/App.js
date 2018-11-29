import React, { Component } from "react";
import "./App.css";
import SideDrawer from "./ChatComponents/SideDrawer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Scroll">
          <SideDrawer uid="ss" />
        </div>
      </div>
    );
  }
}

export default App;
