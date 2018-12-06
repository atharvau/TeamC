import React, { Component } from "react";
import fire from "../Fire";
import Card from "./Card";
import "../A/Style.css";
import "./Chat.css";
import CardSendPic from "./CardSendPic";
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
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Recent Chats</h4>
              <div
                className="chat-box scrollable "
                style={{ height: "475px", webkitscrol: "auto" }}
                data-ps-id="86ffbaf8-776f-0a99-e662-7f15e24d9a84"
              >
                <div class="smooth-scroll list-unstyled">
                  {/*chat Row */}
                  <ul className="chat-list">
                    {/*chat Row */}{" "}
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
                          <Card
                            uid={mess.uid}
                            msg={mess.msg}
                            pic={mess.pic}
                            timestamp={s}
                          />
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body border-top">
              <CardSendPic uid="hj" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatShow;
