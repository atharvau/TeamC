import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBPixicYhdoKhb1WfqEUXOdrQ0Deh79HsA",
  authDomain: "workstation-de68a.firebaseapp.com",
  databaseURL: "https://workstation-de68a.firebaseio.com",
  projectId: "workstation-de68a",
  storageBucket: "workstation-de68a.appspot.com",
  messagingSenderId: "818022529324"
};
let fire = firebase.initializeApp(config);
export default fire;
