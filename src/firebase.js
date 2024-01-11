import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCH-0ksYawVQUMQVrswN8swKcEJ5NEjcA8",
    authDomain: "fir-auth-5d187.firebaseapp.com",
    projectId: "fir-auth-5d187",
    storageBucket: "fir-auth-5d187.appspot.com",
    messagingSenderId: "91973698652",
    appId: "1:91973698652:web:13451957ea5700d1e79299",
    measurementId: "G-B411WSXMYD",
    databaseURL:"https://fir-auth-5d187-default-rtdb.firebaseio.com"
  };

  export const app = initializeApp(firebaseConfig);