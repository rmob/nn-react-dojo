import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDC6zokRYth4Eu-2hQIb6dn7g50Q_nPWto",
    authDomain: "thedojosite-5f337.firebaseapp.com",
    projectId: "thedojosite-5f337",
    storageBucket: "thedojosite-5f337.appspot.com",
    messagingSenderId: "747082676762",
    appId: "1:747082676762:web:6b9ffe1908b9b6a1c4afa3"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.timestamp

export { projectFirestore, projectAuth, timestamp }