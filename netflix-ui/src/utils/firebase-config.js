import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCU_27HharKR3MIKgqNxyjOTO8TAVv5BA0",
  authDomain: "react-netflix-clone-eb82b.firebaseapp.com",
  projectId: "react-netflix-clone-eb82b",
  storageBucket: "react-netflix-clone-eb82b.appspot.com",
  messagingSenderId: "27003080336",
  appId: "1:27003080336:web:137bdbbffdac7726e19215",
  measurementId: "G-JXG3NMMP6T"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);