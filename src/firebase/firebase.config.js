// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL52wzlhP_Adn2_-GyY8g__0Y1EoaHyL4",
  authDomain: "react-dragon-news-auth-e92bb.firebaseapp.com",
  projectId: "react-dragon-news-auth-e92bb",
  storageBucket: "react-dragon-news-auth-e92bb.appspot.com",
  messagingSenderId: "1085628603485",
  appId: "1:1085628603485:web:4f4f899ff8447f310241b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;