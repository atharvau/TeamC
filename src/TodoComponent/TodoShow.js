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
  }

  jk() {
    console.log("AA");
  }

  s(r, c) {
    if (c === false) {
      fire
        .database()
        .ref()
        .child("Todo")
        .child(r)
        .child("Completed")
        .child("uid")
        .set("username")
        .then(() => {
          window.location.reload();
        });
    } else {
      fire
        .database()
        .ref()
        .child("Todo")
        .child(r)
        .child("Completed")
        .child("uid")
        .remove()
        .then(() => {
          window.location.reload();
        });
    }
  }
  render() {
    return (
      <div style={{ padding: 20 }}>
        {this.state.Todo.map(Todo => {
          return (
            <Card key={Todo.Info.ref}>
              <Grid container>
                <Grid item xs={1}>
                  <Checkbox
                    checked={Todo.Info.check}
                    onClick={this.s.bind(this, Todo.Info.ref, Todo.Info.check)}
                  />
                </Grid>
                <Grid item xs={10}>
                  <CardContent>
                    <Typography align="centre" variant="h6" gutterBottom>
                      {Todo.Info.todo}
                    </Typography>
                  </CardContent>
                </Grid>

                <Grid item xs={1} />
              </Grid>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default TodoShow;
