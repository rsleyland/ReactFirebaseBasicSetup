import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const loginUser = async (email, password) => {
  try {
    const auth = getAuth();
    const user = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};