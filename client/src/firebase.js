// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-96ae4.firebaseapp.com",
  projectId: "mern-blog-96ae4",
  storageBucket: "mern-blog-96ae4.appspot.com",
  messagingSenderId: "987881919748",
  appId: "1:987881919748:web:dd9919d02a53f3e3826c51"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);