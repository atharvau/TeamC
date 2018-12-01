import React, { Component } from "react";
import fire from "../Fire";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
class ProfilesShow extends Component {
  state = { profiles: null };

  componentWillMount() {
    var a = [];
    fire
      .database()
      .ref()
      .child("Profile")
      .on("child_added", da => {
        a.push({
          username: da.child("username").node_.value_,
          name: da.child("name").node_.value_,
          profilepicture: da.child("profilepicture").node_.value_
        });
        this.setState({ profiles: a });
      });

    this.setState({ profiles: a });
  }

  render() {
    return (
      <div>
        {" "}
        <List>
          {this.state.profiles.map(profiles => {
            return (
              <ListItem button>
                <Avatar src={profiles.profilepicture} />
                <ListItemText
                  primary={profiles.username}
                  secondary={profiles.name}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

export default ProfilesShow;
