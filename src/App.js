import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import fire from "./Fire";
import SendMsg from "./ChatComponents/SendMsg";
import ChatHead from "./ChatComponents/ChatHead";
import ChatShow from "./ChatComponents/ChatShow";
import Button from "@material-ui/core/Button";
import SideDrawer from "./ChatComponents/SideDrawer";
import Card from "./ChatComponents/Card";
import CardSendmgs from "./ChatComponents/CardSendmgs";
import Fab from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
class App extends Component {
  le() {
    // var str = "The rain in SPAIN stays mainly in the plain";
    // var str =
    //   "Top 10 videos this months: \
    // 1. [youtube:FyCsJAj69sc] \
    // 2. [vimeo:128373915]";
    // var shortcode_regex = /\[(\w+):(\w+)\]/g;

    // var matches = [];
    // str.replace(shortcode_regex, function(match, code, id) {
    //   matches.push({
    //     code: code,
    //     id: id
    //   });
    // });

    // console.log(matches);

    var str = "For @as more information, see Chapter 3.4.5.1";
    var re = /\@\w+/gim;

    var found = str.match(re);

    console.log(found);
  }
  render() {
    return (
      <div className="App">
        {this.le()} <dialog>"A"</dialog>
        <dialog>
          <div className="test" />
        </dialog>
        <SideDrawer uid="sdsd" />
      </div>
    );
  }
}

export default App;
