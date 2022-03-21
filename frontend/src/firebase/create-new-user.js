import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const createNewUser = async (email, password, displayName) => {
    try {
        const auth = getAuth();
        const user = await createUserWithEmailAndPassword(auth, email, password);
        if (user) {
            const updatedUser = await updateProfile(auth.currentUser, {displayName});
            if (updatedUser) {
                console.log("New User Registered");
            }
        }
    } catch (error) {
        console.log(error.code, error.message);
    }
    
}