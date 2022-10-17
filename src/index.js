import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-PMr2QkHc2E_3TvAVVBe6shGxYQWQ9sU",
  authDomain: "mundo-tazas.firebaseapp.com",
  projectId: "mundo-tazas",
  storageBucket: "mundo-tazas.appspot.com",
  messagingSenderId: "149634774416",
  appId: "1:149634774416:web:621f81f0df10743e9faf15",
  measurementId: "G-27J3H9ZRSH"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);
