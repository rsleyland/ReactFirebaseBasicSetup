import 'dotenv/config';
import { initializeApp } from "firebase/app";
import { getItems } from './firebase/getItems';
import { getFirestore } from 'firebase/firestore/lite';
import { useEffect } from'react'; 

// Firebase config setup - secrets stored in env file
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_apiKey,
  authDomain: process.env.REACT_APP_FB_authDomain,
  projectId: process.env.REACT_APP_FB_projectId,
  storageBucket: process.env.REACT_APP_FB_storageBucket,
  messagingSenderId: process.env.REACT_APP_FB_messagingSenderId,
  appId: process.env.REACT_APP_FB_appID,
};
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
export const db = getFirestore(firebase_app);




function App() {

  useEffect(()=> {
    getItems(db);
  }, [])

  return (
    <h2>Hello</h2>
  );
}

export default App;
