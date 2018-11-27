import React, { Component } from "react";
import fire from "../Fire";
import "./Chat.css";
class SendMsg extends Component {
  state = {
    msg: null,
    uid: null,
    timestamp: null
  };

  onChange = e => {
    this.setState({ msg: e.target.value });
    this.setState({ uid: this.props.uid });
    var date = new Date();
    var timestamp = date.getTime();
    this.setState({ timestamp: timestamp });
  };

  onClick = () => {
    fire
      .database()
      .ref()
      .child("Msg")
      .push(this.state);
  };

  render() {
    return (
      <div className="SendMsg">
        <div class="row">
          <div class="col s10">
            <input type="text" onChange={this.onChange} />
          </div>
          <div class="col s2">
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={this.onClick}
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SendMsg;
