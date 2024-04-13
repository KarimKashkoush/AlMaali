import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
    apiKey: "AIzaSyD2Za25VLgSTIPrvIewDzyQ2m42qfRbL2s",
    authDomain: "maali-34bf4.firebaseapp.com",
    projectId: "maali-34bf4",
    storageBucket: "maali-34bf4.appspot.com",
    messagingSenderId: "826888461869",
    appId: "1:826888461869:web:d761bd7cc10efbfd9b62a4"
};


firebase.initializeApp(firebaseConfig);
export const dataRef=firebase.database();
export default firebase;