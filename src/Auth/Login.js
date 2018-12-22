import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import fire from "../Fire";
import { connect } from "react-redux";
import firebase from "firebase";
import "../A/Style.css";
import FF from "../assets/MyImages/beats.png";
import UserContainer from "../State/UserContainer";
import Grid from "@material-ui/core/Grid";
import logo from "../Icons/logo.svg";

import Link from "react-router-dom/Link";
class Login extends Component {
  constructor(props) {
    super(props);

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.onTodoClick(user.uid);

        this.setState({ logged: true });
      }
    });
  }

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
    console.log(e.target.value);

    this.setState({
      password: e.target.value
    });
  };
  onLogin = e => {
    fire.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    fire
      .auth()

      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function() {
        console.log("A");
      });
  };

  render() {
    return (
      <Grid
        container
        style={{ backgroundColor: "white", zIndex: 2, height: 800 }}
        justify="center"
      >
        <Grid
          className="card card-hover"
          item
          md={4}
          xs={12}
          style={{
            backgroundColor: "white",
            zIndex: 4,
            height: 500,
            margin: 40
          }}
        >
          <div>
            <img style={{ width: 50, height: 50 }} src={logo} />
            <h3>
              <b>LineUp</b>
            </h3>

            <div style={{ textAlign: "left", marginLeft: 20 }}>
              <h3>Login</h3>
            </div>
            <TextField
              style={{ width: "60%" }}
              id="outlined-name"
              label="Email"
              margin="normal"
              variant="outlined"
              onChange={this.onChangeEmail}
            />
            <TextField
              style={{ width: "60%" }}
              id="outlined-name"
              label="Password"
              margin="normal"
              variant="outlined"
              onChange={this.onChangePass}
            />
          </div>

          <div>
            <Button
              onClick={this.onLogin}
              variant="contained"
              color="secondary"
              style={{ width: "60%", marginTop: 20 }}
            >
              LogIn
            </Button>

            {this.state.logged ? <Redirect to="/dashboard" /> : null}
          </div>

          <div style={{ textAlign: "right", marginTop: 30, marginRight: 30 }}>
            {" "}
            <Link style={{ color: "black" }} to="/signup">
              <h5>Create Account ?</h5>
            </Link>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};
function toggleTodo(index) {
  return { type: "UID", payload: index };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
