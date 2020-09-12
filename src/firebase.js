import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwB4dN3UmEyrg6zy-hOclPw2JIsskphl4",
  authDomain: "comazone-ea925.firebaseapp.com",
  databaseURL: "https://comazone-ea925.firebaseio.com",
  projectId: "comazone-ea925",
  storageBucket: "comazone-ea925.appspot.com",
  messagingSenderId: "592320962582",
  appId: "1:592320962582:web:b177e27bd45e2e75269537",
  measurementId: "G-4RV4XKFQXK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };