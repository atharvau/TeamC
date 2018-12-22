import React, { Component } from "react";
import fire from "../Fire";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import Card from "./Card";
class ProfilesShow extends Component {
  state = { profiles: null };

  componentWillMount() {
    var a = [];
    fire
      .database()
      .ref()
      .child("Profiles")
      .on("child_added", da => {
        a.push({
          username: da.child("username").node_.value_,
          name: da.child("name").node_.value_,
          profilepicture: da.child("profilepicture").node_.value_
        });
        this.setState({ profiles: a });
      });
    console.log (
      "AAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSAAAAAAAAAAAAAAAA"
    );
    this.setState({ profiles: a });
  }

  render() {
    return (
      <div className="card">
        <ul
          className="nav nav-pills custom-pills"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active show"
              id="pills-timeline-tab"
              data-toggle="pill"
              href="#current-month"
              role="tab"
              aria-controls="pills-timeline"
              aria-selected="true"
            >
              Profiles
            </a>
          </li>
        </ul>
        {/* Tabs */}
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade active show"
            id="current-month"
            role="tabpanel"
            aria-labelledby="pills-timeline-tab"
          >
            <div className="card-body">
              <div className="profiletimeline m-t-0">
                {this.state.profiles.map(profiles => {
                  return (
                    <Card
                      username={profiles.username}
                      propic={profiles.profilepicture}
                      msg={profiles.name}
                      name={profiles.name}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilesShow;
