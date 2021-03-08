import * as firebase from "firebase";
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDWIGO_dO-ts6HNvPO-NuD6B2M7Lu3rIuU",
    authDomain: "newsletter-508a9.firebaseapp.com",
    databaseURL: "https://newsletter-508a9-default-rtdb.firebaseio.com",
    projectId: "newsletter-508a9",
    storageBucket: "newsletter-508a9.appspot.com",
    messagingSenderId: "308401064594",
    appId: "1:308401064594:web:1d01770f230e9a53ebf44b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()