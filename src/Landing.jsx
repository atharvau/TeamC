import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import posed from "react-pose";
import jam from "./Icons/jam.png";
import dash from "./Icons/sc1.png";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Window, TitleBar, Text } from "react-desktop/macOs";
import Card from "./ChatComponents/Card";
import shape from "./Icons/shape-1.svg";
import Plx from "react-plx";
import logo from "./Icons/logo.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Typed from "react-typed";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});
const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: "scale"
      }
    ]
  }
];

const parallaxData2 = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: -1000,
        endValue: 0,
        property: "translateX"
      }
    ]
  }
];

const parallaxData3 = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: -2000,
        endValue: 0,
        property: "translateY"
      }
    ]
  }
];

const rotate = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: 90,
        endValue: 0,
        property: "rotate"
      }
    ]
  }
];

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 12 };
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ backgroundColor: "#8327f2", height: 2000 }}>
        <div>
          <header
            style={{ backgroundColor: "#8327f2", position: "sticky" }}
            className="header"
          >
            <nav className="navbar navbar-expand-lg" color="#8327f2">
              <div className="container">
                {/* Navbar brand*/}
                <a href="index.html">
                  <img
                    style={{ width: 50, height: 50, marginTop: 0 }}
                    src={logo}
                  />
                </a>

                <h2 style={{ marginLeft: 20 }} className="nav-item">
                  <b>LineUp</b>
                </h2>
                {/* Navbar toggler button*/}

                <div
                  id="navbarSupportedContent"
                  className="collapse navbar-collapse"
                >
                  <ul className="navbar-nav mx-auto ml-auto">
                    {/* Link*/}

                    <li className="nav-item">
                      {" "}
                      <a href="schedule.html" className="nav-link">
                        What's on
                      </a>
                    </li>
                    {/* Link*/}
                    <li className="nav-item">
                      {" "}
                      <a href="text.html" className="nav-link">
                        Text Page
                      </a>
                    </li>
                    {/* Link*/}
                    <li className="nav-item">
                      {" "}
                      <a href="#" className="nav-link">
                        Get started
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        id="pages"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="nav-link dropdown-toggle"
                      >
                        Pages
                      </a>
                      <div className="dropdown-menu">
                        <a href="index.html" className="dropdown-item">
                          Home
                        </a>
                        <a href="schedule.html" className="dropdown-item">
                          What's on
                        </a>
                        <a href="text.html" className="dropdown-item">
                          Text Page
                        </a>
                      </div>
                    </li>
                  </ul>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#login"
                        className="nav-link font-weight-bold mr-3"
                      >
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="navbar-btn btn btn-primary">
                        Get Started
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
        <section
          style={{ backgroundColor: "#8327f2", height: 900, paddingTop: 70 }}
        >
          <Grid fluid>
            <Row>
              <Col
                xs={12}
                md={7}
                style={{ color: "white", textAlign: "center" }}
              >
                <b>
                  {" "}
                  <Plx parallaxData={parallaxData}>
                    <Typography
                      variant="h2"
                      gutterBottom
                      bold
                      style={{ color: "white", marginTop: 30 }}
                    >
                      A New Team Chat Application{" "}
                    </Typography>{" "}
                  </Plx>
                </b>
                <div>
                  <Typed
                    strings={[
                      "Organize Everything With LineUp",
                      "Orgaize Inbox",
                      "Orgaize Email",

                      "Orgaize Notes ",
                      "Orgaize Todo ",
                      "Orgaize Poll ",
                      "Orgaize Links"
                    ]}
                    typeSpeed={60}
                    loop
                    style={{ fontSize: "30px", height: "20px" }}
                  />
                </div>
                <Grid fluid style={{ marginTop: 80 }}>
                  {" "}
                  <Row center>
                    <Col xs={0} md={2.5} />
                    <Col xs={12} md={7} style={{ textAlign: "center" }}>
                      <Plx parallaxData={parallaxData2}>
                        <Card backgroundColor="white" username="ASSSSSSSSSs" />
                      </Plx>

                      <div>
                        <Plx parallaxData={parallaxData3}>
                          <Typography
                            variant="h6"
                            gutterBottom
                            bold
                            style={{ color: "white", marginTop: 30 }}
                          >
                            This is React component which makes creating on
                            scroll effects (aka parallax) easy. If you are not
                            sure what it does, demo should help. It is
                            lightweight, and beside react, react-dom and
                            prop-types has no dependencies, now it has small
                            bezier-easing package. As listening to scroll event
                            is not performant, this component uses different
                            approach. Interval is set (every 16ms to get 60fps)
                            to check if scroll position is changed, and if it
                            is, it broadcasts custom event. All of the Plx
                            components are sharing the scroll manager singleton.
                            Interval is set when the first component is created,
                            and cleared when last one is unmounted. Interval
                            time can be changed through the props, but it is
                            shared across the components{" "}
                          </Typography>
                        </Plx>
                      </div>

                      <Card />
                    </Col>
                    <Col xs={0} md={2.5} />
                  </Row>
                </Grid>
              </Col>

              <Col
                xs={12}
                md={5}
                style={{
                  backgroundColor: "white",

                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  textAlign: "center"
                }}
              >
                <img src={dash} />
              </Col>
            </Row>
          </Grid>
        </section>
        <section
          style={{ marginTop: 60, backgroundColor: "white" }}
          className="features shape-2"
        >
          <div className="container">
            <div className="section-header text-center">
              <span className="section-header-title">Features</span>
              <h2 className="h1">Built and customized</h2>
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <p className="lead">
                    ShowTrackr’s built-in machine learning and context-aware
                    features guarantee that all the notifications and
                    recommendations are always delivered to you in the perfect
                    moment.
                  </p>
                </div>
              </div>
            </div>

            <Grid fluid style={{ paddingTop: 90 }}>
              <Row>
                <Col xs={3} md={3}>
                  <Grid fluid>
                    <Row>
                      <Col style={{ textAlign: "left" }} xs={2} md={2}>
                        <div
                          className="card-hover"
                          style={{
                            height: "70px",
                            width: "70px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            textAlign: "center",
                            display: "inline-block",
                            boxShadow:
                              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                          }}
                        >
                          <h2 style={{ marginTop: 18 }}>
                            {" "}
                            <b>$</b>
                          </h2>
                        </div>
                      </Col>{" "}
                      <Col xs={2} md={2} />
                      <Col xs={8} md={8}>
                        <p />
                        <b>
                          <h3 style={{ textAlign: "left" }}>Todo</h3>{" "}
                        </b>
                      </Col>
                    </Row>
                  </Grid>
                </Col>{" "}
                <Col xs={3} md={3}>
                  <Grid fluid>
                    <Row>
                      <Col style={{ textAlign: "left" }} xs={2} md={2}>
                        <div
                          className="card-hover"
                          style={{
                            height: "70px",
                            width: "70px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            textAlign: "center",
                            display: "inline-block",
                            boxShadow:
                              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                          }}
                        >
                          <h2 style={{ marginTop: 18 }}>
                            {" "}
                            <b>@</b>
                          </h2>
                        </div>
                      </Col>{" "}
                      <Col xs={2} md={2} />
                      <Col xs={8} md={8}>
                        <p />
                        <b>
                          <h3 style={{ textAlign: "left" }}>Email</h3>{" "}
                        </b>
                      </Col>
                    </Row>
                  </Grid>
                </Col>{" "}
                <Col xs={3} md={3}>
                  <Grid fluid>
                    <Row>
                      <Col style={{ textAlign: "left" }} xs={2} md={2}>
                        <div
                          className="card-hover"
                          style={{
                            height: "70px",
                            width: "70px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            textAlign: "center",
                            display: "inline-block",
                            boxShadow:
                              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                          }}
                        >
                          <h2 style={{ marginTop: 18 }}>
                            {" "}
                            <b>#</b>
                          </h2>
                        </div>
                      </Col>{" "}
                      <Col xs={2} md={2} />
                      <Col xs={8} md={8}>
                        <p />
                        <b>
                          <h3 style={{ textAlign: "left" }}>Note</h3>{" "}
                        </b>
                      </Col>
                    </Row>
                  </Grid>
                </Col>{" "}
                <Col xs={3} md={3}>
                  <Grid fluid>
                    <Row>
                      <Col style={{ textAlign: "left" }} xs={2} md={2}>
                        <Plx />{" "}
                        <div
                          className="card-hover"
                          style={{
                            height: "70px",
                            width: "70px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            textAlign: "center",
                            display: "inline-block",
                            boxShadow:
                              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                          }}
                        >
                          <h2 style={{ marginTop: 18 }}>
                            {" "}
                            <b>%</b>
                          </h2>
                        </div>
                      </Col>{" "}
                      <Col xs={2} md={2} />
                      <Col xs={8} md={8}>
                        <p />
                        <b>
                          <h3 style={{ textAlign: "left" }}>Poll</h3>{" "}
                        </b>
                      </Col>
                    </Row>
                  </Grid>
                </Col>{" "}
              </Row>
            </Grid>

            <Grid fluid style={{ paddingBottom: 140 }}>
              <Row>
                <Col xs={3} md={3} />
                <Col xs={3} md={3}>
                  <Grid fluid>
                    <Row>
                      <Col style={{ textAlign: "left" }} xs={2} md={2}>
                        <div
                          className="card-hover"
                          style={{
                            height: "70px",
                            width: "70px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            textAlign: "center",
                            display: "inline-block",
                            boxShadow:
                              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                          }}
                        >
                          <h3 style={{ marginTop: 18 }}>
                            {" "}
                            <b>www</b>
                          </h3>
                        </div>
                      </Col>{" "}
                      <Col xs={2} md={2} />
                      <Col xs={8} md={8}>
                        <p />
                        <b>
                          <h3 style={{ textAlign: "left" }}>Links</h3>{" "}
                        </b>
                      </Col>
                    </Row>
                  </Grid>
                </Col>{" "}
                <Col xs={3} md={3}>
                  <Grid fluid>
                    <Row>
                      <Col style={{ textAlign: "left" }} xs={2} md={2}>
                        <div
                          className="card-hover"
                          style={{
                            height: "70px",
                            width: "70px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            textAlign: "center",
                            display: "inline-block",
                            boxShadow:
                              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                          }}
                        >
                          <h2 style={{ marginTop: 18 }}>
                            {" "}
                            <b>$</b>
                          </h2>
                        </div>
                      </Col>{" "}
                      <Col xs={2} md={2} />
                      <Col xs={8} md={8}>
                        <p />
                        <b>
                          <h3 style={{ textAlign: "left" }}>Todo</h3>{" "}
                        </b>
                      </Col>
                    </Row>
                  </Grid>
                </Col>
              </Row>
            </Grid>
          </div>
        </section>
        <section
          style={{
            height: 800,
            backgroundColor: "black",
            textAlign: "center",
            color: "white",
            padding: 200
          }}
        >
          <Grid style={{ marginLeft: 40, textAlign: "right" }} fluid>
            <Row>
              <Col
                style={{ textAlign: "right", left: 0 }}
                xs={12}
                md={4}
                center
              >
                <Window
                  style={{ left: 0 }}
                  background="white"
                  chrome
                  height="300px"
                  width="550px"
                  padding="10px"
                >
                  <TitleBar title="harmonize" controls />
                  <Text>
                    <h4>
                      Hey @TimSmoth prepare $Login_page for new Project #axium
                    </h4>
                  </Text>
                </Window>
              </Col>

              <Col xs={12} md={6}>
                <h1>Features</h1>
                <ul>
                  <ol>
                    <h3>ATAHRAV</h3>
                  </ol>
                </ul>{" "}
              </Col>
            </Row>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Landing;
