import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqChZdKeMcUGLgSblT6imnNgxkpbwj8pk",
  authDomain: "velocita-feedback-form.firebaseapp.com",
  projectId: "velocita-feedback-form",
  storageBucket: "velocita-feedback-form.appspot.com",
  messagingSenderId: "985104934104",
  appId: "1:985104934104:web:7ea10eb505b17fbff2e3ad",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
