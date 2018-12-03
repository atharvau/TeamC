import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import fire from "../Fire";
class SignUp2 extends Component {
  state = {
    name: null,
    email: null,
    password: null,
    username: null,
    logged: false
  };

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };
  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };
  onChangePass = e => {
    this.setState({ password: e.target.value });
  };
  onChangeUser = e => {
    this.setState({ username: e.target.value });
  };

  OnCreateuser = () => {
    console.log(this.state);

    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password);

    this.CHeck();
  };

  OnLogin = () => {
    this.setState({ login: true });
  };

  CHeck = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        fire
          .database()
          .ref()
          .child("Profiles")
          .child(user.uid)
          .set(this.state);
        window.alert("User IS Logged In");
        this.setState({ logged: true });
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <TextField
            id="outlined-name"
            label="Name"
            margin="normal"
            variant="outlined"
            onChange={this.onChangeName}
          />
        </div>

        <div>
          <TextField
            id="outlined-name"
            label="Username"
            margin="normal"
            variant="outlined"
            onChange={this.onChangeUser}
          />
        </div>
        <div>
          <TextField
            id="outlined-name"
            label="Email"
            margin="normal"
            variant="outlined"
            onChange={this.onChangeEmail}
          />
        </div>
        <div>
          <TextField
            id="outlined-name"
            label="Password"
            margin="normal"
            onChange={this.onChangePass}
            variant="outlined"
          />
        </div>

        <div>
          <Button
            onClick={this.OnCreateuser}
            variant="contained"
            color="secondary"
          >
            SignUp
          </Button>

          {this.state.logged ? <Redirect push to="/dashboard" /> : null}
          {this.state.login ? <Redirect push to="/login" /> : null}

          <Button onClick={this.OnLogin} variant="contained" color="secondary">
            Login
          </Button>
        </div>
      </div>
    );
  }
}
export default SignUp2;
