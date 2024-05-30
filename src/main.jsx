import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPZD0lkS91g2zHPSl1Y25_9w_nw88k4UM",
  authDomain: "caschy2-e8315.firebaseapp.com",
  projectId: "caschy2-e8315",
  storageBucket: "caschy2-e8315.appspot.com",
  messagingSenderId: "284883855869",
  appId: "1:284883855869:web:b46a5b03db0355f5475194"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

