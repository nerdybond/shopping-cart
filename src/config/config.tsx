import React from "react";
import firebase from "firebase";
import "firebase/firebase-firestore"
import "firebase/firebase-storage"

const firebaseConfig = {
    apiKey: "AIzaSyAnGOl56mcGtN81sH7SphrNacFPMJiQIGI",
    authDomain: "new-project-274819.firebaseapp.com",
    projectId: "new-project-274819",
    storageBucket: "new-project-274819.appspot.com",
    messagingSenderId: "540407169996",
    appId: "1:540407169996:web:446d9216a64a32faead369",
    measurementId: "G-EK6BKYP1PR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Uncomment later, when Analytics is measurable - firebase.analytics();


//default values to make sure there's no error when running initially.
//TO-DO: Change files to import firebase from firebase app
export default firebaseConfig;