// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGLEQkh8BUO2p4ZAbAao0RTCtnl83Bkm0",
  authDomain: "scrimbaproj.firebaseapp.com",
  projectId: "scrimbaproj",
  storageBucket: "scrimbaproj.appspot.com",
  messagingSenderId: "336516254430",
  appId: "1:336516254430:web:8f90aad1d2f8179daad04f",
  measurementId: "G-LXE0PZZ54W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")