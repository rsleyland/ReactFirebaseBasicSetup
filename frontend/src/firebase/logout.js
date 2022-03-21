import { getAuth, signOut } from "firebase/auth";

export const Logout = async () => {
    try {
        const auth = getAuth();
        const signedOut = await signOut(auth);
        if (signedOut) {
            console.log("Signed out");
        };
    } catch (error) {
        console.error(error);
    }
};