import { getAuth, signOut } from "firebase/auth";

export const Logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("Signed out");
    }).catch((error) => {
        console.error(error);
    });
}