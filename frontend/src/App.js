import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { LoginScreen } from "./screens/auth/Login.screen";
import { RegisterScreen } from "./screens/auth/Register.screen";
import { LogoutScreen } from "./screens/auth/Logout.screen";
import { ProfileScreen } from "./screens/Profile.screen";
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from "./firebase/auth/AuthContextProvider";

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
    <AuthContextProvider>
      <Routes>
        <Route path='login' element={<LoginScreen/>} />
        <Route path='logout' element={<LogoutScreen/>} />
        <Route path='register' element={<RegisterScreen/>} />
        <Route path='profile' element={<ProfileScreen/>} />
      </Routes>
    </AuthContextProvider>
    
  );
}

export default App;
