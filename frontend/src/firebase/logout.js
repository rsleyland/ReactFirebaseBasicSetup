import { getAuth, signOut } from "firebase/auth";

export const logout = async () => {
    try {
        const auth = getAuth();
        await signOut(auth);
        console.log("Signed out");
    } catch (error) {
        console.error(error);
    }
};