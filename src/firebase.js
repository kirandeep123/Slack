import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDnSr-oL6P6j1cgUIdDCUYckAgrS4Sw42g",
  authDomain: "slack-c613a.firebaseapp.com",
  projectId: "slack-c613a",
  storageBucket: "slack-c613a.appspot.com",
  messagingSenderId: "975025727534",
  appId: "1:975025727534:web:d001064ee32df18c4ed7bf",
  measurementId: "G-6D0FY0CWKP"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


 export { auth, provider, db};