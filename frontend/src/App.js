import 'dotenv/config';
import { initializeApp } from "firebase/app";

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
initializeApp(firebaseConfig);


function App() {
  return (
    <h2>Hello</h2>
  );
}

export default App;
