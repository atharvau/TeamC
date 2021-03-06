import React, { Component } from "react";
import FF from "../assets/MyImages/beats.png";
import { connect } from "react-redux";
import fire from "../Fire";
import NoteIcon from "../A/note.png";
import Grid from "@material-ui/core/Grid";
import Link from "react-router-dom/Link";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import SDashboard from "./SDashboard";
import STodo from "./STodo";
import SPoll from "./SPoll";
import SInbox from "./SInbox";
import SNote from "./SNote";

const nonactive = {};
class SideDrawer extends Component {
  state = {
    once: false,
    Notifications: {
      Msg: 0
    }
  };

  dashboard = () => {
    return (
      <div>
        <Link to="/dashboard">
          <Grid
            container
            style={{ color: "#6479ed", backgroundColor: "#6479ed" }}
          >
            <Grid item xs={2} />
            <Grid item xs={6}>
              <h5 style={{ color: "white" }}>Dashboard</h5>{" "}
            </Grid>
            <Grid style={{ marginTop: 6 }} item xs={2}>
              <span style={{ color: "white" }} className="badge">
                {this.props.Msg}
              </span>{" "}
            </Grid>
          </Grid>
        </Link>{" "}
        <Link to="/dashboard/inbox">
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={6}>
              <h5 style={{ color: "black" }}>Inbox</h5>{" "}
            </Grid>
            <Grid style={{ marginTop: 6 }} item xs={2}>
              <span className="badge">{this.props.Inbox}</span>{" "}
            </Grid>
          </Grid>
        </Link>
        <Link to="/dashboard/note">
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={6}>
              <h5 style={{ color: "black" }}>Note</h5>{" "}
            </Grid>
            <Grid style={{ marginTop: 6 }} item xs={2}>
              <span className="badge">{this.props.Note}</span>{" "}
            </Grid>
          </Grid>
        </Link>
        <Link to="/dashboard/todo">
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={6}>
              <h5 style={{ color: "black" }}>Todo</h5>{" "}
            </Grid>
            <Grid style={{ marginTop: 6 }} item xs={2}>
              <span className="badge">{this.props.Todo}</span>{" "}
            </Grid>
          </Grid>
        </Link>
        <Link to="/dashboard/poll">
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={6}>
              <h5 style={{ color: "black" }}>Poll</h5>{" "}
            </Grid>
            <Grid style={{ marginTop: 6 }} item xs={2}>
              <span className="badge">{this.props.Poll}</span>{" "}
            </Grid>
          </Grid>
        </Link>
      </div>
    );
  };

  render() {
    return (
      <aside
        style={{ zIndex: 0, position: "fixed" }}
        className="left-sidebar __web-inspector-hide-shortcut__"
        data-sidebarbg="skin6"
      >
        {/* Sidebar scroll*/}
        <div
          className="scroll-sidebar ps-container ps-theme-default ps-active-y"
          data-ps-id="9f0b0d4d-aa58-1e1d-908f-b3ce4b7ff9c0"
        >
          <div
            className="slimScrollDiv active"
            style={{
              position: "relative",
              overflow: "hidden",
              width: "auto",
              height: 644
            }}
          >
            <div
              className="slimscroll-menu in"
              id="remove-scroll"
              style={{ overflow: "hidden", width: "auto", height: 644 }}
            >
              <div>
                <div>
                  <img
                    style={{ marginTop: 40, width: 100, height: 100 }}
                    src={this.props.pic}
                    alt="user-img"
                    title="Mat Helme"
                    className="rounded-circle img-fluid"
                  />
                </div>
                <h4>{this.props.name}</h4>

                {/* {this.props.uid && !this.state.once ? this.lo() : null}
                {this.props.Notifications.Msg} */}
                <p className="text-muted">{this.props.username}</p>
              </div>
              {/*- Sidemenu */}

              <div id="sidebar-menu" className="active">
                <ul>
                  {/* <Switch>
                    <Route
                      path="/dashboard"
                      exact
                      render={() => (
                        <SDashboard
                          Msg={this.props.Msg}
                          Note={this.props.Note}
                          Todo={this.props.Todo}
                          Poll={this.props.Poll}
                          Inbox={this.props.Inbox}
                        />
                      )}
                    />
                    <Route
                      path="/dashboard/inbox"
                      exact
                      render={() => (
                        <SInbox
                          Msg={this.props.Msg}
                          Note={this.props.Note}
                          Todo={this.props.Todo}
                          Poll={this.props.Poll}
                          Inbox={this.props.Inbox}
                        />
                      )}
                    />
                    <Route
                      path="/dashboard/todo"
                      render={() => (
                        <STodo
                          Msg={this.props.Msg}
                          Note={this.props.Note}
                          Todo={this.props.Todo}
                          Poll={this.props.Poll}
                          Inbox={this.props.Inbox}
                        />
                      )}
                    />
                  </Switch>  */}
                  <STodo
                    Msg={this.props.Msg}
                    Note={this.props.Note}
                    Todo={this.props.Todo}
                    Poll={this.props.Poll}
                    Inbox={this.props.Inbox}
                  />
                </ul>
              </div>
              {/* Sidebar */}
              <div className="clearfix" />
            </div>
            <div
              className="slimScrollBar"
              style={{
                background: "rgb(158, 165, 171)",
                width: 8,
                position: "absolute",
                top: 66,
                opacity: "0.4",
                display: "none",
                borderRadius: 7,
                zIndex: 99,
                right: 1,
                height: "423.2px"
              }}
            />
            <div
              className="slimScrollRail"
              style={{
                width: 8,
                height: "100%",
                position: "absolute",
                top: 0,
                display: "none",
                borderRadius: 7,
                background: "rgb(51, 51, 51)",
                opacity: "0.2",
                zIndex: 90,
                right: 1
              }}
            />
          </div>
        </div>
        {console.log ("End", this.props.Msg)}
      </aside>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    k: id => {
      dispatch(uid(id));
    },

    n: id => {
      dispatch(name(id));
    },

    u: id => {
      dispatch(username(id));
    },

    p: id => {
      dispatch(pic(id));
    }
  };
};

function uid(index) {
  return { type: "UID", payload: index };
}

function name(index) {
  return { type: "NAME", payload: index };
}

function username(index) {
  return { type: "USERNAME", payload: index };
}

function pic(index) {
  return { type: "PIC", payload: index };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideDrawer);
