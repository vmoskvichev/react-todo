import React, {useState} from 'react'
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fetchToken = async () => {
        const res = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
              'Content-Type': 'application/json'
            }
        });

        const {token} = await res.json()
        localStorage.setItem('token', token);
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            fetchToken()
        }} className="login-form">
            <label htmlFor="email">
                <span>Login</span>
                <input className="input login" value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
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