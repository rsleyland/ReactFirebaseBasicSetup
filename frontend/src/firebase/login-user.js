import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const LoginUser = (email, password)=> {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((u)=> {
      }).catch(err => {
        console.error(err);
      });
}