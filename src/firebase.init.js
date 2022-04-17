// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIONox1ENer1P2kSV8gfPS8Y17Y11L1p8",
  authDomain: "gym-trainer-f8f60.firebaseapp.com",
  projectId: "gym-trainer-f8f60",
  storageBucket: "gym-trainer-f8f60.appspot.com",
  messagingSenderId: "538358243633",
  appId: "1:538358243633:web:edee78358cf45bbd401010"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;