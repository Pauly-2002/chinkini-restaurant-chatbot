// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCclsqsAHQUL76dfcc75a18ulyRD7o9n0",
  authDomain: "chikini-monie.firebaseapp.com",
  projectId: "chikini-monie",
  storageBucket: "chikini-monie.firebasestorage.app",
  messagingSenderId: "284259793907",
  appId: "1:284259793907:web:16ef86ceb4bdb205953086",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
