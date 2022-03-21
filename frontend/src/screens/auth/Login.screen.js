import { useState } from 'react';
import { loginUser } from '../../firebase/auth/login-user';


export const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        loginUser(email, password);
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