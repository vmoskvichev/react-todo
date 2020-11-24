import React, { useState } from 'react';

const AuthForm = ({ submit }) => {
    const [email, setEmail] = useState('test_0@gmail.com');
    const [password, setPassword] = useState('test_0');

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                submit(email, password);
            }}
            className="login-form"
        >
            <label htmlFor="email">
                <span>Login</span>
                <input
                    className="input login"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                />
            </label>

            <label htmlFor="password">
                <span>Password</span>
                <input
                    className="input password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
            </label>

            <button type="submit">Log in</button>
        </form>
    );
};

export default AuthForm;
