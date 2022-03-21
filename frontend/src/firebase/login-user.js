import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const loginUser = (email, password)=> {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((u)=> {
      console.log(u)
      }).catch(err => {
        console.error(err);
      });
}