import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const CreateUser = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}