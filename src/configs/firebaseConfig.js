// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'


const firebaseConfig = {
  apiKey: "AIzaSyBdEWQhRIXDWKQ7ozwqsj35l6VhyhiT0E8",
  authDomain: "login-register-firebase-82c2e.firebaseapp.com",
  projectId: "login-register-firebase-82c2e",
  storageBucket: "login-register-firebase-82c2e.appspot.com",
  messagingSenderId: "820871167019",
  appId: "1:820871167019:web:7b9022bc2efdb83eeafe6e"
};


const app = firebase.initializeApp(firebaseConfig);


export default app;
