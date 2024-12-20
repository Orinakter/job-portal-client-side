// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP-T0sqVxRzW16WGqJEmGJSqngkAKsUdQ",
  authDomain: "job-portal-a3997.firebaseapp.com",
  projectId: "job-portal-a3997",
  storageBucket: "job-portal-a3997.firebasestorage.app",
  messagingSenderId: "674010117406",
  appId: "1:674010117406:web:f70ce1bd8be93dabad850f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);