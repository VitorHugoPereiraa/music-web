import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBdEud7nMoGZDsiQ2KgtsbKrU1ZlZs0-DI",
  authDomain: "music-web-e4b50.firebaseapp.com",
  projectId: "music-web-e4b50",
  storageBucket: "music-web-e4b50.appspot.com",
  messagingSenderId: "189512114725",
  appId: "1:189512114725:web:3e040a46f503b5e61ed5cc",
  measurementId: "G-ZLHZRZLNZ1",
};
const fb = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export { firestore };
export default fb;
