import React, { Component } from "react";
import fire from "../Fire";
class TodoShow extends Component {
  state = {};

  componentDidMount() {
    fire
      .database()
      .ref()
      .child("Todo")
      .on("child_added", da => {
        console.log(da);
      });
  }

  render() {
    return <div />;
  }
}

export default TodoShow;
