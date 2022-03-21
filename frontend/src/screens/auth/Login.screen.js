import { useState } from 'react';
import { loginUser } from '../../firebase/auth/login-user';
import { useNavigate } from 'react-router-dom';


export const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (await loginUser(email, password)) navigate('/profile');
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-12 col-md-8">
                    <form className="p-3 border border-2" onSubmit={submitHandler}>
                        <h4>Login</h4>
                        <label className='form-label'>Email</label>
                        <input className='form-control' type="email" value={email} name='email' onChange={(e) => (setEmail(e.target.value))}/>
                        <label className='form-label'>Password</label>
                        <input className='form-control' type="password" value={password} name='password' onChange={(e) => (setPassword(e.target.value))}/>
                        <div className="d-flex justify-content-center my-3">
                            <button className='form-control w-50 btn btn-success mx-auto' type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
};