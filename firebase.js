// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY8ourRHhbZf-uxUoYTn9j90tP7kh0ip4",
  authDomain: "twitter-46aee.firebaseapp.com",
  projectId: "twitter-46aee",
  storageBucket: "twitter-46aee.appspot.com",
  messagingSenderId: "928855796840",
  appId: "1:928855796840:web:4439e31f40b9f6d0b75fdd",
  measurementId: "G-J2G9XQVNLF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
