import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1pqysZH_D4H91_rAXxbsJXFF0Fjvs8dk",
  authDomain: "orfin-e8f03.firebaseapp.com",
  projectId: "orfin-e8f03",
  storageBucket: "orfin-e8f03.appspot.com",
  messagingSenderId: "601878031081",
  appId: "1:601878031081:web:f6f4e196a331e615b91e78",
  measurementId: "G-34N0E4TE1C"
};
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);