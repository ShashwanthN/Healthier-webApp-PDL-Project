import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDxLa4Ge-lYIjPEdawpmG53KuJ_q7YwYuc",
  authDomain: "healthier-754d7.firebaseapp.com",
  projectId: "healthier-754d7",
  storageBucket: "healthier-754d7.appspot.com",
  messagingSenderId: "392152318160",
  appId: "1:392152318160:web:3ff72bb5d60788cf1b9ed5",
  measurementId: "G-H3H63CKC97"
};


export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);