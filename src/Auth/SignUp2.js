import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import fire from "../Fire";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import ReactNotifications from "react-browser-notifications";
import logo from "../Icons/logo.svg";

import Link from "react-router-dom/Link";
class SignUp2 extends Component {
  constructor() {
    super();
    this.showNotifications = this.showNotifications.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showNotifications() {
    // If the Notifications API is supported by the browser
    // then show the notification
    if (this.n.supported()) this.n.show();
  }

  handleClick(event) {
    // Do something here such as
    // console.log("Notification Clicked") OR
    // window.focus() OR
    // window.open("http://www.google.com")

    // Lastly, Close the notification
    this.n.close(event.target.tag);
  }
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
  validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  OnCreateuser = () => {
    var kk = this.validateEmail(this.state.email);
    if (kk === true) {
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          window.alert(errorMessage);
        })
        .then(() => {
          console.log(this.state);

          this.props.onTodoClick(fire.auth().currentUser.uid);

          this.CHeck();
        });
    }
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
        fire
          .database()
          .ref()
          .child("List")
          .child(user.uid)
          .set(this.state.username);

        window.alert("User IS Logged In");
        this.setState({ logged: true });
      }
    });
  };

  render() {
    return (
      <Grid
        container
        style={{ backgroundColor: "white", zIndex: 8, height: 800 }}
        justify="center"
        className="card-hover"
      >
        <Grid
          item
          xs={12}
          md={3}
          style={{
            backgroundColor: "white",
            zIndex: 4,
            height: 500,
            width: 500,
            margin: 50
          }}
        >
          <div>
            <img style={{ width: 50, height: 50 }} src={logo} />
            <h3>
              <b>LineUp</b>
            </h3>

            <div style={{ textAlign: "left", marginLeft: 10, marginTop: 30 }}>
              <h3>Sign Up</h3>
            </div>
            <TextField
              style={{ width: "100%" }}
              id="outlined-name"
              label="Name"
              margin="normal"
              variant="outlined"
              onChange={this.onChangeName}
            />
          </div>
          <div>
            <TextField
              style={{ width: "100%" }}
              id="outlined-name"
              label="Username"
              margin="normal"
              variant="outlined"
              onChange={this.onChangeUser}
            />
          </div>
          <div>
            <TextField
              style={{ width: "100%" }}
              id="outlined-name"
              label="Email"
              margin="normal"
              variant="outlined"
              onChange={this.onChangeEmail}
            />
          </div>
          <div>
            <TextField
              style={{ width: "100%" }}
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
              style={{ width: "100%", marginTop: 20 }}
            >
              SignUp
            </Button>

            {this.state.logged ? <Redirect push to="/dashboard" /> : null}
            {this.state.login ? <Redirect push to="/login" /> : null}
          </div>
          <div style={{ textAlign: "right", marginTop: 30, marginRight: 30 }}>
            {" "}
            <Link style={{ color: "black" }} to="/login">
              <h5>Already A Member ?</h5>
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
)(SignUp2);
