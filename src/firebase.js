import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAtHDxZ3n9J3iClkza0Nd82VWpvhNBO2sc",
    authDomain: "capadmin-641ae.firebaseapp.com",
    databaseURL: "https://capadmin-641ae.firebaseio.com",
    projectId: "capadmin-641ae",
    storageBucket: "capadmin-641ae.appspot.com",
    messagingSenderId: "190755946574",
    appId: "1:190755946574:web:7b19f349d2b4818f02831f"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();