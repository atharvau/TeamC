import React, { Component } from "react";
import fire from "../Fire";
import Card from "./Card";

class ChatShow extends Component {
  state = {
    mess: [],
    revmess: []
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
          timestamp: da.child("timestamp").node_.value_,
          pic: da.child("pic").node_.value_
        });
        this.setState({ mess: a });
      });

    this.setState({
      mess: this.state.mess,
      revmess: this.state.mess.reverse
    });
  }
  render() {
    return (
      <div>
        {this.state.mess
          .slice(0)
          .reverse()
          .map(mess => {
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
                <Card
                  uid={mess.uid}
                  msg={mess.msg}
                  pic={mess.pic}
                  timestamp={s}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default ChatShow;
