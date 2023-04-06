// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGSfTi5pYj3dcXfcQ42gHKBcjj3yNgJy8",
  authDomain: "fir-vite-todo.firebaseapp.com",
  projectId: "fir-vite-todo",
  storageBucket: "fir-vite-todo.appspot.com",
  messagingSenderId: "1080409817806",
  appId: "1:1080409817806:web:7634837137769c94f8869f",
  measurementId: "G-KVYH2BG1NE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
