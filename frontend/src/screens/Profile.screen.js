import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/auth/AuthContextProvider";
import { addItem, getItemsByUserId } from "../components/items/items";

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
                    { user && <><h5>{user.uid} - {user.displayName}</h5>

                    <button className="btn btn-primary" onClick={() => addItem(user.uid)}>Add Item</button>
                    <button className="btn btn-primary" onClick={() => getItemsByUserId(user.uid)}>Log Items</button></>}
                </div>
            </div>
        </div>
    )
};