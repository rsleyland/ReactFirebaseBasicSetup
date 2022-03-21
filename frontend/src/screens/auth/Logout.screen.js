import { useEffect } from 'react';
import { logout } from '../../firebase/logout';

export const LogoutScreen = () => {

    useEffect(()=> {
        logout();
    }, []);

    return null;
};