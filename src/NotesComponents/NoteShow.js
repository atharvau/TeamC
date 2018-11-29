import React, { Component } from "react";
import fire from "../Fire";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Info from "@material-ui/icons/Info";
import Collapse from "@material-ui/core/Collapse";
import { withStyles } from "@material-ui/core/styles";
import ClassesShrthand from "./Not";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import classnames from "classnames";

import "./No.css";

// We can use inline-style
const style = {
  width: "100%",
  background: "black"
};

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  label: {
    textTransform: "capitalize"
  }
});
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
        console.log(da);
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
