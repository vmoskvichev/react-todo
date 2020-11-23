import React, { useState, useEffect, useCallback } from 'react';
import { renderRoutes } from 'react-router-config';
import './App.css';
import { TokenContext } from '../../tokenContext';
import { ErrorContext } from '../../errorContext';
import tokenService from '../../services/tokenService';

let errors = [];
const subscribers = [];
const subscribe = (cb) => {
    subscribers.push(cb);
};

const pushS = () => {
    console.log('errors', errors);
    subscribers.forEach(async (cb) => cb([...errors]));
};

const addError = (err) => {
    const id = Date.now();

    errors.push({ err, id });

    pushS();

    setTimeout(() => {
        errors = errors.filter((item) => item.id !== id);
        pushS();
    }, 5000);
};

function App({ route }) {
    const [token, setToken] = useState(tokenService.getToken());
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        subscribe(setErrors);
    }, []);

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
            <ErrorContext.Provider value={{ errors, addError }}>
                <div className="App">
                    {JSON.stringify(errors)}
                    <div onClick={() => addError('sss')}>TTTTTTTTTTTTT</div>
                    {renderRoutes(route.routes, { setToken, token })}
                </div>
            </ErrorContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;
