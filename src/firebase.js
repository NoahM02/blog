import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHjhNAexRjS3ks79rgzyYizB2fzbLWsX8",
    authDomain: "blog-36dc2.firebaseapp.com",
    projectId: "blog-36dc2",
    storageBucket: "blog-36dc2.appspot.com",
    messagingSenderId: "907713744766",
    appId: "1:907713744766:web:e5f3831b4c240cfbd1ad2f"
  };

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()

export default firebase