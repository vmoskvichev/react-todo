import React, { useEffect, useState } from 'react';
import './Login.css';
import api from '../../services/apiService';
import tokenService from '../../services/tokenService';
import AuthForm from '../AuthForm';
import { useAPI } from '../../services/customHooks';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { refetch, isLoading, isError, error, data } = useAPI(
        () => api.auth.login(email, password),
        {
            afterRequset: ({ data }) => tokenService.setToken(data),
        }
    );

    const submit = (mail, pass) => {
        setEmail(mail)
        setPassword(pass)
        refetch();
    };

    return <AuthForm submit={submit} />;
};

export default Login;
