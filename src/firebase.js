import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCMCrS43OpTjQOjTlWOPb4bnGKtiKiQo1E",
  authDomain: "netflix-clone-138c5.firebaseapp.com",
  projectId: "netflix-clone-138c5",
  storageBucket: "netflix-clone-138c5.appspot.com",
  messagingSenderId: "911921887114",
  appId: "1:911921887114:web:cc15a02c98207a8686ba73"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db= firebaseApp.firestore()

const auth = firebase.auth()

export { auth,db }
