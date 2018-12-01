import React, { Component } from "react";
import fire from "../Fire";
import List from "@material-ui/core/List";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fab from "@material-ui/core/ButtonBase";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
class TodoShow extends Component {
  state = {
    Todo: [],
    expanded: false,
    checkb: []
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  componentDidMount() {
    var jj = [];
    var i = 0;

    fire
      .database()
      .ref()
      .child("Todo")
      .on("child_added", da => {
        var b = [];
        var g = false;
        fire
          .database()
          .ref()
          .child("Todo")
          .child(da.key)
          .child("Completed")
          .on("child_added", d => {
            i++;
            b.push(d.val());
            if (d.val() === "username") {
              g = true;
            }
          });
        var ll = {
          Info: {
            todo: da.val().info.todo,
            timestamp: da.val().info.timestamp,
            key: da.val().info.key,
            uid: da.val().info.uid,
            ref: da.key,
            check: g,
            index: i
          },
          Completed: b
        };

        jj.push(ll);

        this.setState({ Todo: jj });
      });

    fire
      .database()
      .ref()
      .child("Todo")
      .on("child_changed", da => {
        var b = [];

        var g = false;
        fire
          .database()
          .ref()
          .child("Todo")
          .child(da.key)
          .child("Completed")
          .on("child_changed", d => {
            b.push(d.val());
            if (d.val() === "username") {
              g = true;
            }
          });
        var ll = {
          Info: {
            todo: da.val().info.todo,
            timestamp: da.val().info.timestamp,
            key: da.val().info.key,
            uid: da.val().info.uid,
            ref: da.key,
            check: g
          },
          Completed: b
        };

        jj.push(ll);

        this.setState({ Todo: jj });
      });
  }

  s(r) {
    fire
      .database()
      .ref()
      .child("Todo")
      .child(r)
      .child("Completed")
      .child("uid")
      .set("username");
  }

  render() {
    return (
      <div>
        {this.state.Todo.map(Todo => {
          return (
            <Card key={Todo.Info.ref}>
              <Grid container>
                <Grid item xs={1}>
                  <Checkbox />
                </Grid>
                <Grid item xs={10}>
                  <CardHeader
                    title={Todo.Info.uid}
                    subheader={Todo.Info.timestamp}
                  />

                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {Todo.Info.todo}
                    </Typography>
                    <Collapse
                      in={this.state.expanded}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List>
                        {Todo.Completed.map(text => {
                          return <ListItemText primary={text} />;
                        })}
                      </List>
                    </Collapse>
                  </CardContent>
                </Grid>

                <Grid item xs={1}>
                  <Fab
                    variant="extended"
                    aria-label="Delete"
                    onClick={this.handleExpandClick}
                  >
                    <ExpandMoreIcon />
                  </Fab>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default TodoShow;
