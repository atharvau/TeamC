import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import fire from "../Fire";
import { Subscribe } from "unstated";

import UserContainer from "../State/UserContainer";
class Login extends Component {
  state = {
    email: null,
    password: null,
    signup: false,
    logged: false
  };

  CHeck = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.CHeck();



        
      }
    });
  };

  h() {
    if (this.state.logged) {
      return <Redirect to="/dashboard" />;
    }
  }

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChangePass = e => {
    this.setState({
      password: e.target.value
    });
  };
  onLogin = e => {
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password);

    this.setState({ logged: true });
  };

  render() {
    return (
      <div>
        <div>
          <TextField
            id="outlined-name"
            label="Email"
            margin="normal"
            variant="outlined"
            onChange={this.onChangeEmail}
          />
        </div>
        {console.log(fire.auth().currentUser)}
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
          <Button variant="contained" color="secondary" onClick={this.onLogin}>
            Login
          </Button>

          <a href="/signup">
            <Button variant="contained" color="secondary">
              SignUp
            </Button>
          </a>

          {this.state.logged ? <Redirect to="/dashboard" /> : null}
        </div>
      </div>
    );
  }
}
export default Login;
