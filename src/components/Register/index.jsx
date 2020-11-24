import React, { useState } from 'react';
import api from '../../services/apiService';
import AuthForm from '../AuthForm';
import { useAPI } from '../../services/customHooks';

const Register = () => {
    const [email, setEmail] = useState('test_0@gmail.com');
    const [password, setPassword] = useState('test_0');

    const { refetch, isLoading, isError, error, data } = useAPI(
        () => api.register.register(email, password),
        {
            afterRequset: ({ data }) => console.log(JSON.stringify(data)),
        }
    );

    const submit = (e) => {
        e.preventDefault();
        refetch();
    };

    return (
        <AuthForm
            onSubmit={submit}
            onSetEmail={setEmail}
            onSetPassword={setPassword}
            email={email}
            password={password}
        />
    );
};

export default Register;
