import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCSfw2QeteLnsu4zkRvwerK7loVPXzEu9c",
    authDomain: "my-facebook-f6c76.firebaseapp.com",
    projectId: "my-facebook-f6c76",
    storageBucket: "my-facebook-f6c76.appspot.com",
    messagingSenderId: "211543636815",
    appId: "1:211543636815:android:329ed0a5e20bf30444a33a"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Extract 'firestore' instance
const db = firebase.firestore();

export { db };
