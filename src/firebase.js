import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCYTDS0ldIi3I5G9kF5oxAOEAc2-OaAYnc",
  authDomain: "whatsapp-clone-78bbc.firebaseapp.com",
  projectId: "whatsapp-clone-78bbc",
  storageBucket: "whatsapp-clone-78bbc.appspot.com",
  messagingSenderId: "258806077602",
  appId: "1:258806077602:web:a985107d9be59b07df5ffb",
  measurementId: "G-CPBP8LPT22",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

