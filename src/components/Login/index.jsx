import React, {useState} from 'react'
import './Login.css';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const logIn = (e) => {
        e.preventDefault();
        localStorage.setItem('token', '1');
        return
    }

    return (
        <form onSubmit={logIn} className="login-form">
            <label htmlFor="login">
                <span>Login</span>
                <input className="input login" value={login} onChange={(e) => setLogin(e.target.value)} type="text"/>
            </label>

            <label htmlFor="password">
                <span>Password</span>
                <input className="input password" value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
            </label>

            <button type="submit">Log in</button>
        </form>
    )
}

export default Login;