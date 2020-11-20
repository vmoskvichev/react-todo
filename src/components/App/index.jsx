import React, { useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import './App.css';
import { TokenContext } from '../../tokenContext';
import tokenService from '../../services/tokenService';

function App({ route }) {
	const [token, setToken] = useState(tokenService.getToken());

	useEffect(() => {
		tokenService.subscribe((token) => {
			setToken(token);
		});
	}, []);

	const tokenContext = {
		token,
	};

	return (
		<TokenContext.Provider value={tokenContext}>
			<div className='App'>
				{renderRoutes(route.routes, { setToken, token })}
			</div>
		</TokenContext.Provider>
	);
}

export default App;
