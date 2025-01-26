import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFePtVmgE8XeGzM-rGmI4IQzxuvO80prk",
  authDomain: "authentication-5547f.firebaseapp.com",
  projectId: "authentication-5547f",
  storageBucket: "authentication-5547f.firebasestorage.app",
  messagingSenderId: "361697029809",
  appId: "1:361697029809:web:2207833a200bde2fed3c90",
  measurementId: "G-2VSPRP5JTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
