// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB46o6B5BGrx-yWlJzTkg7vcxYIzIttxbw",
  authDomain: "giphy-search-alphabi.firebaseapp.com",
  projectId: "giphy-search-alphabi",
  storageBucket: "giphy-search-alphabi.appspot.com",
  messagingSenderId: "815713735680",
  appId: "1:815713735680:web:06146b686cb6e74fc6b4e5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };