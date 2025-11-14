// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvirtualcourses-28a06.firebaseapp.com",
  projectId: "loginvirtualcourses-28a06",
  storageBucket: "loginvirtualcourses-28a06.firebasestorage.app",
  messagingSenderId: "749835317897",
  appId: "1:749835317897:web:6e56656f0ed163db9e4c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
// provider.setCustomParameters({
//   prompt: "select_account"
// });

export {auth, provider}