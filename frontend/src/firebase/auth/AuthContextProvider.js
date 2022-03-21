import { createContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (usr) => {
        if (usr) {
            setCurrentUser(usr);
        }
    });


    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}