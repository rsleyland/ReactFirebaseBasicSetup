import { useState } from 'react';
import { createNewUser } from '../../firebase/auth/create-new-user';


export const RegisterScreen = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (password == passwordConfirm) createNewUser(email, password, displayName);
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-12 col-md-8">
                    <form className="p-3 border border-2" onSubmit={submitHandler}>
                        <h4>Register</h4>
                        <label className='form-label'>Display Name</label>
                        <input className='form-control' type="text" value={displayName} name='displayName' onChange={(e) => (setDisplayName(e.target.value))}/>
                        <label className='form-label'>Email</label>
                        <input className='form-control' type="email" value={email} name='email' onChange={(e) => (setEmail(e.target.value))}/>
                        <label className='form-label'>Password</label>
                        <input className='form-control' type="password" value={password} name='password' onChange={(e) => (setPassword(e.target.value))}/>
                        <label className='form-label'>Password Confirm</label>
                        <input className='form-control' type="password" value={passwordConfirm} name='passwordConfirm' onChange={(e) => (setPasswordConfirm(e.target.value))}/>
                        <div className="d-flex justify-content-center my-3">
                            <button className='form-control w-50 btn btn-success mx-auto' type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
};