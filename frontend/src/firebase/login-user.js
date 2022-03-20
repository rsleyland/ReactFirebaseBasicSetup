import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const LoginUser = ()=> {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "test@test.com", "testtest").then((u)=> {
        setUser(u.user);
        console.log(u.user)
      }).catch(err => {
        console.error(err)
      });
}