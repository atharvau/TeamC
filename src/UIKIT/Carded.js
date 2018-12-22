import React, { Component } from "react";
import pollicon from "../Icons/profile.png";
import poll from "../Icons/poll.jpg";
import plane from "../Icons/plane.jpg";
import todoicon from "../Icons/icontodo.png";
import todopoll from "../Icons/iconpoll.png";
import msgicon from "../Icons/iconmsg.png";
import fire from "../Fire";
import Link from "react-router-dom/Link";

class Carded extends Component {
  state = {};

  componentWillMount() {
    var bb = [];
    var bh = [];

    fire
      .database()
      .ref()
      .child("Msg")
      .on("child_added", dd => {
        bb.push(dd.val().msg);

        this.setState({
          Msg: bb.length
        });
      });

    fire
      .database()
      .ref()
      .child("Poll")
      .on("child_added", dd => {
        this.setState({
          Poll: dd.numChildren()
        });
      });

    fire
      .database()
      .ref()
      .child("Todo")
      .on("child_added", dd => {
        bh.push(dd.val().timestamp);

        console.log("Atha", bh.length);

        this.setState({
          Todo: bh.length
        });
      });

    fire
      .database()
      .ref()
      .child("Profiles")
      .on("child_added", dd => {
        this.setState({
          Profile: dd.numChildren()
        });
      });
  }
  render() {
    return (
      <div className="row ">
        <div className="col-lg-3 col-md-6 col-xs-6">
          <Link to="/dashboard/profiles">
            <div className="card border-bottom border-info card-hover">
              <div className="card-body">
                <div className="d-flex no-block align-items-center">
                  <div>
                    <h2>{this.state.Profile}</h2>
                    <h6 className="text-info">News Feed</h6>
                  </div>
                  <div className="ml-auto">
                    <span className="text-info display-6">
                      <img src={pollicon} />
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-6">
          <Link to="/dashboard/todo">
            <div className="card border-bottom border-cyan  card-hover">
              <div className="card-body">
                <div className="d-flex no-block align-items-center">
                  <div>
                    <h2>{this.state.Todo}</h2>
                    <h6 className="text-cyan">Tasks</h6>
                  </div>
                  <div className="ml-auto">
                    <span className="text-cyan display-6">
                      <img src={todoicon} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-6 ">
          <Link to="/dashboard/poll">
            <div className="card border-bottom border-success  card-hover">
              <div className="card-body">
                <div className="d-flex no-block align-items-center">
                  <div>
                    <h2>{this.state.Poll}</h2>
                    <h6 className="text-success">Poll</h6>
                  </div>
                  <div className="ml-auto">
                    <span className="text-success display-6">
                      <img src={todopoll} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-6">
          <Link to="/dashboard">
            <div className="card border-bottom border-orange  card-hover">
              <div className="card-body">
                <div className="d-flex no-block align-items-center">
                  <div>
                    <h2>{this.state.Msg}</h2>
                    <h6 className="text-orange">Conversations</h6>
                  </div>
                  <div className="ml-auto">
                    <span className="text-orange display-6">
                      <img src={msgicon} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Carded;
