import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import fire from "../Fire";

var qaa = {
  msg: null,
  uid: null,
  timestamp: null,
  pic: null
};

var Notes = [];
var Inbox = [];
var key = {};
var Todos = {};

var Poll = [];

var onClick = () => {
  key = fire
    .database()
    .ref()
    .child("Msg")
    .push(qaa).key;

  if (Notes != null) var n = Notes.length;

  let NotesModel = [];
  if (n > 0) {
    for (let index = 0; index < n; index++) {
      NotesModel.push({
        Note: Notes[index],
        timestamp: qaa.timestamp,
        uid: qaa.uid,
        key: key
      });

      fire
        .database()
        .ref()
        .child("Notes")
        .push(NotesModel[index]);
    }
  }

  if (Inbox != null) var g = Inbox.length;
  if (g > 0) {
    for (let index2 = 0; index2 < g; index2++) {
      fire
        .database()
        .ref()
        .child("Inbox")
        .child(Inbox[index2])
        .push(key);
    }
  }

  let TodoModel = [];

  if (Todos != null) var f = Todos.length;
  if (f > 0) {
    for (let ind = 0; ind < f; ind++) {
      TodoModel.push({
        info: {
          todo: Todos[ind],
          timestamp: qaa.timestamp,
          uid: qaa.uid,
          key: key
        }
      });
      fire
        .database()
        .ref()
        .child("Todo")
        .push(TodoModel[ind]);
    }
  }

  if (Poll != null) {
    fire
      .database()
      .ref()
      .child("Poll")
      .push(Poll);
  }
};

const fu = e => {
  var date = new Date();
  var timestamp = date.getTime();

  var re = /#\w+/gim;
  var found = e.target.value.match(re);

  var aba = /@\w+/gim;
  var founda = e.target.value.match(aba);

  var Todo = /\$\w+/gim;
  var TodoF = e.target.value.match(Todo);

  var Polex = /%\w+/gim;
  var Pol = e.target.value.match(Polex);

  Notes = found;
  Inbox = founda;
  Todos = TodoF;

  if (Inbox != null) {
    for (let index3 = 0; index3 < Inbox.length; index3++) {
      var c = Inbox[index3];

      Inbox[index3] = c.substring(1, c.length);
    }
  }

  if (Notes != null) {
    for (let index4 = 0; index4 < Notes.length; index4++) {
      var d = Notes[index4];

      Notes[index4] = d.substring(1, d.length);
    }
  }

  if (TodoF != null) {
    for (let index5 = 0; index5 < TodoF.length; index5++) {
      var f = Todos[index5];
      Todos[index5] = f.substring(1, f.length);
    }
  }

  if (Pol != null) {
    for (let index6 = 0; index6 < Pol.length; index6++) {
      var l = Pol[index6];
      Pol[index6] = l.substring(1, l.length);
    }
  }

  Poll = { title: { Pol }, Info: { timestamp: timestamp, uid: qaa.uid } };

  qaa = {
    uid: qaa.uid,
    msg: e.target.value,
    timestamp: timestamp
  };
};
class CardSendPic extends Component {
  constructor(props) {
    super(props);
    qaa = {
      uid: props.uid
    };

    this.state = {
      username: "AAA",
      avatar: "",
      isUploading: false,
      progress: 0,
      avatarURL: ""
    };
  }

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ avatarURL: url });
        qaa = {
          uid: qaa.uid,
          msg: qaa.msg,
          timestamp: qaa.timestamp,
          pic: url
        };
      });
  };

  render() {
    return (
      <div style={{ width: 400 }}>
        <Card className="CardSendmgs-card-318">
          <CardContent>
            <Typography
              className="CardSendmgs-title-320"
              color="textSecondary"
              gutterBottom
            >
              New Messsage
            </Typography>
            <Input onChange={fu} multiline />
          </CardContent>
          <CardActions>
            <Button onClick={onClick} size="small">
              Send
            </Button>
          </CardActions>

          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          <button>
            <FileUploader
              accept="Posts/*"
              name="avatar"
              randomizeFilename
              storageRef={firebase.storage().ref("images")}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </button>
        </Card>
      </div>
    );
  }
}

export default CardSendPic;
