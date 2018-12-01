import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import fire from "../Fire";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./h.css";
import { Typography } from "@material-ui/core";
const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
};

var s = 0;
var voted = false;
class PolShow extends Component {
  check() {}
  as(ref, title) {
    fire
      .database()
      .ref()
      .child("Poll")
      .child(ref)
      .child("vote")
      .child("Username")
      .set(title);

    fire
      .database()
      .ref()
      .child("Poll")
      .child(ref)
      .child("voteR")
      .child(title)
      .child("Username")
      .set("Username")
      .then(() => {
        window.location.reload();
      });
  }
  componentWillMount() {
    var a = [];
    var s = [];

    fire
      .database()
      .ref()
      .child("Poll")
      .on("child_added", da => {
        var check = false;
        fire
          .database()
          .ref()
          .child("Poll")
          .child(da.key)
          .child("vote")
          .on("child_added", d => {
            if (d.key === "Username") {
              check = true;
            }
          });

        a.push({ a: da.val(), b: da.key, c: check });

        this.setState({ array: a });
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }
  render() {
    return (
      <div>
        {this.state.array
          .slice(0)
          .reverse()
          .map(array => {
            return (
              <div style={{ padding: 30 }}>
                <Card className="RecipeReviewCard-card-297">
                  <CardHeader
                    avatar={
                      <Avatar
                        aria-label="Recipe"
                        className="RecipeReviewCard-avatar-302"
                      >
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="A"
                  />
                  <CardMedia
                    className="RecipeReviewCard-media-298"
                    title="Paella dish"
                  />
                  <CardContent>
                    {array.a.title.Pol.map(Pol => {
                      return (
                        <div style={{ padding: 7 }}>
                          <Grid container>
                            <Grid xs={6}>
                              <Button
                                className="TextButtons-button-1"
                                variant="outlined"
                                color="secondary"
                                size="large"
                                disabled={array.c}
                                onClick={this.as.bind(this, array.b, Pol)}
                              >
                                {Pol}{" "}
                              </Button>{" "}
                            </Grid>
                            <Grid xs={6}>
                              {fire
                                .database()
                                .ref()
                                .child("Poll")
                                .child(array.b)
                                .child("voteR")
                                .child(Pol)
                                .on("value", kak => {
                                  s = kak.numChildren();
                                  console.log(kak.numChildren());
                                })}
                              <div style={{ padding: 4 }}>
                                <Typography align="left">{s}</Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            );
          })}
      </div>
    );
  }
}

export default PolShow;
