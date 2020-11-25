import React, { useState } from 'react';
import api from '../../services/apiService';
import AuthForm from '../AuthForm';
import { useAPI } from '../../services/customHooks';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const Register = ({ history, location }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { refetch, isLoading, isError, error, data } = useAPI(
        api.auth.register,
        {
            afterRequset: (data) => {
                history.push('/login');
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
            <NavLink to="/login">{locationText}</NavLink>
            <AuthForm submit={submit} btnText={locationText} />
        </>
    );
};

export default Register;
