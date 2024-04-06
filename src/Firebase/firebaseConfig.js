// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAYPcWniGsgkAZquo0vdu2ZpK_mgwrNN1o",
  authDomain: "auth-test-f44a5.firebaseapp.com",
  projectId: "auth-test-f44a5",
  storageBucket: "auth-test-f44a5.appspot.com",
  messagingSenderId: "1072306102197",
  appId: "1:1072306102197:web:9b3447bd039e5c335343fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;