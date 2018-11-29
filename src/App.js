import React, { Component } from "react";
import "./App.css";
import SideDrawer from "./ChatComponents/SideDrawer";
import ProfilePage from "./TodoComponent/ProfilePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfilePage />

        {/* <div className="Scroll">
          <SideDrawer uid="ss" />
        </div> */}
      </div>
    );
  }
}

export default App;
