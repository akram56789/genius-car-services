// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:'AIzaSyDDGyMLHgsxACOUfiRIBqI3XbiAf2uclG8',
  authDomain:'genius-car-services-98ce4.firebaseapp.com',
  projectId:'genius-car-services-98ce4',
  storageBucket:' genius-car-services-98ce4.appspot.com',
  messagingSenderId:' 651206105700',
  appId:'1:651206105700:web:912afe71e4582e9752dd71',
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;