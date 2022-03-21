import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const createNewUser = (email, password, displayName) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        user.displayName = displayName;
        updateProfile(auth.currentUser, {displayName}).then(console.log("New User Registered")).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);

        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}