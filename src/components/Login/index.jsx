import React, { useEffect, useState, useContext } from 'react';
import './Login.css';
import api from '../../services/apiService';
import tokenService from '../../services/tokenService';
import ErrorHandler from '../ErrorHandler';
import { ErrorContext } from '../../errorContext';
import ErrorsAlert from '../ErrorsAlert';

function useAPI(cb, options = {}) {
    const [state, setState] = useState({
        isError: false,
        error: {},
        data: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const refetch = () => {
        setIsLoading(true);
        cb()
            .then((data) => {
                setIsLoading(false);

                setState({ ...state, isError: false, error: {}, data });

                if (options.afterRequset) {
                    options.afterRequset({ isError: false, error: {}, data });
                }
            })
            .catch((error) => {
                setIsLoading(false);

                setState({ ...state, isError: true, error, data: '' });

                if (options.afterRequset) {
                    options.afterRequset({ isError: true, error, data: '' });
                }
            });
    };

    useEffect(() => {
        if (options.isMountRequest) {
            refetch();
        }
    }, [options]);

    return { refetch, ...state, isLoading };
}

const Login = () => {
    const [email, setEmail] = useState('jimm1234@gmail.com');
    const [password, setPassword] = useState('11');
    const { errors, addError } = useContext(ErrorContext);

    const { refetch, isLoading, isError, error, data } = useAPI(
        () => api.auth.login(email, password),
        {
            afterRequset: ({ data }) => tokenService.setToken(data),
        }
    );


    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    refetch();
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
        </>
    );
};

export default Login;
