import { initializeApp } from "firebase/app";
 
import {getAuth} from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyDsWq7Nlc724vxPhU8WlEqbt7eCXU8A52o",
  authDomain: "react-authentication-4b407.firebaseapp.com",
  projectId: "react-authentication-4b407",
  storageBucket: "react-authentication-4b407.appspot.com",
  messagingSenderId: "362239646148",
  appId: "1:362239646148:web:1c2dce76a827153019ac91",
  measurementId: "G-KGWP6SBTE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app); 