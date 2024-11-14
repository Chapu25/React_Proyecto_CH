// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,

  /* apiKey: "AIzaSyA_oWAd-61SwNfVga7VW_IDRiw8vMlZxoo",
  authDomain: "backend-nico.firebaseapp.com",
  projectId: "backend-nico",
  storageBucket: "backend-nico.firebasestorage.app",
  messagingSenderId: "591235659674",
  appId: "1:591235659674:web:cd819b57fc5f90c0d2ac23" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);