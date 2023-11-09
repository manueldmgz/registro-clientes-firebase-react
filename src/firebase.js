// import { initializeApp } from 'firebase/app';
// import {getFirestore} from "@firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyA7FIDoBF1nhT9CUbmvvWK4SdAinVhl7lI",
//   authDomain: "test-project-geeks.firebaseapp.com",
//   projectId: "test-project-geeks",
//   storageBucket: "test-project-geeks.appspot.com",
//   messagingSenderId: "639632910584",
//   appId: "1:639632910584:web:54171d141ef651de7bf30d"
// };

// const app = initializeApp(firebaseConfig)
// export const db = getFirestore(app)


// Método geeks
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7FIDoBF1nhT9CUbmvvWK4SdAinVhl7lI",
  authDomain: "test-project-geeks.firebaseapp.com",
  projectId: "test-project-geeks",
  storageBucket: "test-project-geeks.appspot.com",
  messagingSenderId: "639632910584",
  appId: "1:639632910584:web:54171d141ef651de7bf30d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
