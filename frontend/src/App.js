import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { LoginScreen } from "./screens/auth/Login.screen";
import { RegisterScreen } from "./screens/auth/Register.screen";
import { Routes, Route } from 'react-router-dom';

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

  return (
    <Routes>
      <Route path='login' element={<LoginScreen/>} />
      <Route path='register' element={<RegisterScreen/>} />
    </Routes>
    
  );
}

export default App;
