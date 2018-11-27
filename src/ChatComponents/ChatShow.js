import React, { Component } from "react";
import fire from "../Fire";
import ChatHead from "./ChatHead";
import Card from "./Card";

class ChatShow extends Component {
  state = {
    mess: []
  };

  componentWillMount() {
    let a = [];
    fire
      .database()
      .ref()
      .child("Msg")
      .on("child_added", da => {
        a.push({
          msg: da.child("msg").node_.value_,
          uid: da.child("uid").node_.value_,
          timestamp: da.child("timestamp").node_.value_
        });
        this.setState({ mess: a });
      });
  }
  render() {
    return (
      <div>
        {this.state.mess.map(mess => {
          var d = new Date(mess.timestamp);
          var s =
            d.getHours() +
            ":" +
            d.getMinutes() +
            "    " +
            d.getDate() +
            "/" +
            d.getMonth();

          return (
            <div>
              <Card uid={mess.uid} msg={mess.msg} timestamp={s} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChatShow;
