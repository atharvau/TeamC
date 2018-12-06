import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import fire from "../Fire";
import { connect } from "react-redux";
import "../A/Style.css";
import FF from "../assets/MyImages/beats.png";
import UserContainer from "../State/UserContainer";
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
    this.setState({
      password: e.target.value
    });
  };
  onLogin = e => {
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password);
    this.props.onTodoClick(fire.auth().currentUser.uid);

    this.setState({ logged: true });
  };

  render() {
    return (
      <div className="main-wrapper">
        {/* ============================================================== */}
        {/* Preloader - style you can find in spinners.css */}
        {/* ============================================================== */}
        <div className="preloader" style={{ display: "none" }}>
          <div className="lds-ripple">
            <div className="lds-pos" />
            <div className="lds-pos" />
          </div>
        </div>
        {/* ============================================================== */}
        {/* Preloader - style you can find in spinners.css */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Login box.scss */}
        {/* ============================================================== */}
        <div
          className="auth-wrapper d-flex no-block justify-content-center align-items-center"
          style={{
            background:
              "url(../../assets/images/big/auth-bg.jpg) no-repeat center center"
          }}
        >
          <div className="auth-box">
            <div id="loginform">
              <div className="logo">
                <span className="db">
                  <img style={{ width: 50, height: 50 }} src={FF} alt="logo" />
                </span>
                <h5 className="font-medium m-b-20">Sign In to Admin</h5>
              </div>
              {/* Form */}
              <div className="row">
                <div className="col-12">
                  <form
                    className="form-horizontal m-t-20"
                    id="loginform"
                    action="index.html"
                  >
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="ti-user" />
                        </span>
                      </div>
                      <input
                        type="text"
                        onChange={this.onChangeEmail}
                        className="form-control form-control-lg"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon2">
                          <i className="ti-pencil" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        aria-label="Password"
                        onChange={this.onChangePass}
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />

                          <a
                            href="javascript:void(0)"
                            id="to-recover"
                            className="text-dark float-right"
                          >
                            <i className="fa fa-lock m-r-5" /> Forgot pwd?
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="form-group text-center">
                      <div className="col-xs-12 p-b-20">
                        <button
                          onClick={this.onLogin}
                          className="btn btn-block btn-lg btn-info"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>
                    </div>

                    <div className="form-group m-b-0 m-t-10">
                      <div className="col-sm-12 text-center">
                        Don't have an account?{" "}
                        <a
                          href="authentication-register1.html"
                          className="text-info m-l-5"
                        >
                          <b>Sign Up</b>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div id="recoverform">
              <div className="logo">
                <span className="db">
                  <img src="../../assets/images/logo-icon.png" alt="logo" />
                </span>
                <h5 className="font-medium m-b-20">Recover Password</h5>
                <span>
                  Enter your Email and instructions will be sent to you!
                </span>
              </div>
              <div className="row m-t-20">
                {/* Form */}
                <form className="col-12" action="index.html">
                  {/* email */}
                  <div className="form-group row">
                    <div className="col-12">
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        required
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  {/* pwd */}
                  <div className="row m-t-20">
                    <div className="col-12">
                      <button
                        className="btn btn-block btn-lg btn-danger"
                        type="submit"
                        name="action"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* Login box.scss */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Page wrapper scss in scafholding.scss */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Page wrapper scss in scafholding.scss */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Right Sidebar */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Right Sidebar */}
        {/* ============================================================== */}{" "}
        {this.state.logged ? <Redirect to="/dashboard" /> : null}
      </div>
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
