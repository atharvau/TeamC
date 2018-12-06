import React, { Component } from "react";
import ChatShow from "../ChatComponents/ChatShow";
import "../A/Style.css";
import Carded from "./Carded";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div
        id="main-wrapper"
        data-theme="light"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
        data-boxed-layout="full"
      >
        <div className="page-wrapper" style={{ display: "block" }}>
          <div className="container-fluid">
            <Carded /> <ChatShow />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
