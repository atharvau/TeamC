import React, { Component } from "react";
import fire from "../Fire";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./No.css";

class NoteShow extends Component {
  state = {
    Notes: []
  };

  componentWillMount() {
    var a = [];
    fire
      .database()
      .ref()
      .child("Notes")
      .on("child_added", da => {
        a.push({
          Note: da.child("Note").node_.value_,
          timestamp: da.child("timestamp").node_.value_,
          uid: da.child("uid").node_.value_
        });
        this.setState({ Notes: a });
      });

    this.setState({ profiles: a });
  }
  render() {
    return (
      <div>
        <List>
          {this.state.Notes.map(Notes => {
            return (
              <Card style={{ minWidth: 380 }}>
                <CardHeader
                  avatar={<Avatar aria-label="Recipe">R</Avatar>}
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={Notes.uid}
                  subheader={Notes.timestamp}
                />

                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {Notes.Note}{" "}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </List>
      </div>
    );
  }
}

export default NoteShow;
