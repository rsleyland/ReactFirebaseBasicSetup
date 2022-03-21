import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../firebase/auth/logout';

export const LogoutScreen = () => {

    const navigate = useNavigate();

    useEffect(()=> {
        const logoutAndNavigate = async () => {
            if (await logout()) navigate('/login');
        };logoutAndNavigate();
    }, []);
    return null;
};