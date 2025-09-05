
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwVL9TMRZq5Zw2-iZ2uTu-Z3JJHPcuJb8",
  authDomain: "recipe-book-app-54aa2.firebaseapp.com",
  projectId: "recipe-book-app-54aa2",
  storageBucket: "recipe-book-app-54aa2.firebasestorage.app",
  messagingSenderId: "520825106637",
  appId: "1:520825106637:web:806e82f36ff19fb078f984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);