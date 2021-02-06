import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuv2ewn-MWak9DiIypnN9PS453aZQpEyc",
    authDomain: "crwn-clothing-e74ff.firebaseapp.com",
    projectId: "crwn-clothing-e74ff",
    storageBucket: "crwn-clothing-e74ff.appspot.com",
    messagingSenderId: "661868935676",
    appId: "1:661868935676:web:6772cbd099ca4e72459a79"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;