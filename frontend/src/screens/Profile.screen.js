import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/auth/AuthContextProvider";

export const ProfileScreen = () => {

    const [user, setUser] = useState(null);
    const { currentUser } = useContext(AuthContext);

    useEffect(()=> {
        setUser(currentUser);
    }, [currentUser])


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h4>Profile</h4>
                    { user && <h5>{user.uid} - {user.displayName}</h5>}
                </div>
            </div>
        </div>
    )
};