import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import "../A/Style.css";
import Grid from "@material-ui/core/Grid";
import "./Chat.css";
import { Paper } from "@material-ui/core";

const styles = theme => ({
  card: {
    minWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    function UserGreeting(p) {
      if (p != null) {
        return (
          <CardMedia className={classes.media} image={p} title="Paella dish" />
        );
      } else return null;
    }

    const { classes } = this.props;

    return (
      <li className="chat-item">
        <div className="container">
          <Grid alignContent="flex-start" container>
            <Grid item xs={2}>
              <div className="chat-img">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/workstation-de68a.appspot.com/o/eibgv7kctah62iddzywm.webp?alt=media&token=41c3c4b4-bc9c-4c62-8e9c-4971902f614d"
                  style={{ height: 40, width: 40 }}
                  alt="user"
                />
              </div>
            </Grid>
            <Grid item xs={10}>
              <div className="container">
                <h6 className="font-medium">{this.props.uid}</h6>
                <div className="box bg-light-info">
                  <div className="container">{this.props.msg}</div>{" "}
                </div>
              </div>
              <div className="chat-time">{this.props.timestamp}</div>
            </Grid>
          </Grid>
        </div>
      </li>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
