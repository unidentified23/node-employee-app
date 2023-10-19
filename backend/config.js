const { application } = require("express");
const firebase = require("firebase") ;
// the web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAG_sc_3nURF0_sd-dviG3Ag007dIm2RrE",
    authDomain: "employee-reg-6b5d4.firebaseapp.com",
    projectId: "employee-reg-6b5d4",
    storageBucket: "employee-reg-6b5d4.appspot.com",
    messagingSenderId: "70912848710",
    appId: "1:70912848710:web:c3ce604df158f644976b47",
  
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const User = db.collection("Users");
  module.exports = User;
  
  