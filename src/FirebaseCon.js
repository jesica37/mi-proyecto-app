import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnoDkXOteqDmO5FqQnxkAVI_FdWrYnt4w",
  authDomain: "e-comerce-electrohome.firebaseapp.com",
  projectId: "e-comerce-electrohome",
  storageBucket: "e-comerce-electrohome.firebasestorage.app",
  messagingSenderId: "1034055082648",
  appId: "1:1034055082648:web:e3ae42ccbdc842e6b2e6ed"
};


export const app = initializeApp(firebaseConfig);