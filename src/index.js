import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSUDGCm2IxszJMhVhHBeN8FcOYXrpGLew",
  authDomain: "mundo-tazas-6c6bd.firebaseapp.com",
  projectId: "mundo-tazas-6c6bd",
  storageBucket: "mundo-tazas-6c6bd.appspot.com",
  messagingSenderId: "379319237702",
  appId: "1:379319237702:web:05e5a53efce94469335e47"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);
