// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjyM6Xjg3Zahn2DNjaJdkM3Jka1ajtieI",
  authDomain: "taste-me-restaurant.firebaseapp.com",
  projectId: "taste-me-restaurant",
  storageBucket: "taste-me-restaurant.appspot.com",
  messagingSenderId: "62649062176",
  appId: "1:62649062176:web:d89b5d10c3782545977d45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
