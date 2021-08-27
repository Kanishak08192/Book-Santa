import firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-GExxb4yBuo6d7TgIViCqyCH4Zq-apb8",
    authDomain: "book-santa-3a50a.firebaseapp.com",
    projectId: "book-santa-3a50a",
    storageBucket: "book-santa-3a50a.appspot.com",
    messagingSenderId: "237111627235",
    appId: "1:237111627235:web:bea54693c64d72984aa4d6",
    measurementId: "G-DLRX63PD26"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();