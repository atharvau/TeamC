import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import fire from "../Fire";
const styles = {
  card: {
    minWidth: 300
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

var qaa = {
  msg: null,
  uid: null,
  timestamp: null
};

var Notes = [];
var Inbox = [];
var key = {};

var onClick = () => {
  key = fire
    .database()
    .ref()
    .child("Msg")
    .push(qaa).key;

  console.log(key);

  if (Notes != null) var n = Notes.length;

  let NotesModel = [];
  if (n > 0) {
    for (let index = 0; index < n; index++) {
      NotesModel.push({
        Note: Notes[index],
        timestamp: qaa.timestamp,
        uid: qaa.uid
      });
      fire
        .database()
        .ref()
        .child("Notes")
        .push(NotesModel[index]);
    }

    if (Inbox != null) var n2 = Notes.length;

    if (n2 > 0) {
      for (let ind = 0; ind < n2; ind++) {
        fire
          .database()
          .ref()
          .child("Inbox")
          .child(Inbox[ind])
          .push(key);
      }
    }
  }
};

const fu = e => {
  var date = new Date();
  var timestamp = date.getTime();

  var re = /\#\w+/gim;

  var found = e.target.value.match(re);

  var as = /\@\w+/gim;
  var founda = e.target.value.match(as);

  Notes = found;
  Inbox = founda;

  console.log(Notes);
  qaa = {
    uid: qaa.uid,
    msg: e.target.value,
    timestamp: timestamp
  };
};
function CardSendmgs(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  qaa = {
    uid: props.uid
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            New Messsage
          </Typography>
          <Input onChange={fu} multiline />
        </CardContent>
        <CardActions>
          <div />
          <Button onClick={onClick} size="small">
            Send
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

CardSendmgs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardSendmgs);
