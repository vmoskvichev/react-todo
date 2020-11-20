import React, { useState } from 'react';
import './Login.css';
import api from '../../services/apiService';
import tokenService from '../../services/tokenService';

const Login = () => {
	const [email, setEmail] = useState('jimm1234@gmail.com');
	const [password, setPassword] = useState('111');

	const loadToken = (e) => {
		e.preventDefault();
		api.auth
			.login(email, password)
			.then(tokenService.setToken)
			.catch((err) => console.log('login error', err));
	};

	return (
		<form onSubmit={loadToken} className='login-form'>
			<label htmlFor='email'>
				<span>Login</span>
				<input
					className='input login'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='text'
				/>
			</label>

			<label htmlFor='password'>
				<span>Password</span>
				<input
					className='input password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type='password'
				/>
			</label>

			<button type='submit'>Log in</button>
		</form>
	);
};

export default Login;
