import React, { useEffect, useState } from 'react';
import './Login.css';
import api from '../../services/apiService';
import tokenService from '../../services/tokenService';
import AuthForm from '../AuthForm';
import { useAPI } from '../../services/customHooks';
import { NavLink } from 'react-router-dom';

const Login = ({location}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { refetch, isLoading, isError, error, data } = useAPI(
        api.auth.login,
        {
            afterRequset: ({ data, isError, error }) => {
                if (!isError) {
                    tokenService.setToken(data.token);
                }
            },
        }
    );

    const submit = (email, password) => {
        setEmail(email);
        setPassword(password);
        refetch(email, password);
    };

    const locationText = location.pathname.split('').slice(1).join('');

    return (
        <>
            <NavLink to="/registration">{locationText}</NavLink>
            <AuthForm submit={submit} btnText={locationText}/>
        </>
    );
};

export default Login;
