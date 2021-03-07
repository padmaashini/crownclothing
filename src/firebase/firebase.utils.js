import firebase from 'firebase/app';
//firebase utilities
import 'firebase/firestore'; 
import 'firebase/auth';
// need to import firebase to import db (firestore) and auth

const config = {
    apiKey: "AIzaSyAiFdCH0a2W_6OXC1lXYukr1odQOmMonEk",
    authDomain: "crwn-db-2d127.firebaseapp.com",
    projectId: "crwn-db-2d127",
    storageBucket: "crwn-db-2d127.appspot.com",
    messagingSenderId: "992474274491",
    appId: "1:992474274491:web:6b0de30a4fa38a07d8a79e",
    measurementId: "G-Y6H0BPPTQT"
};

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

// setting up google authentication utility 
const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({prompt: 'select_account'}) ;
// ^^we want to always trigger the google popup whenever we use tthis Google auth
// provider for authentication and sign in 

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 