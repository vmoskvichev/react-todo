import React, {useEffect, useContext} from 'react';
import { ErrorContext } from '../../errorContext';
import ErrorHandler from '../ErrorHandler';


const ErrorsAlert = ({setErrors}) => {
    const { errors, addError } = useContext(ErrorContext);

    useEffect(() => {
        const timeout = setTimeout(() => {
            return 
        }, 3500);
        return () => {
            clearInterval(timeout)
        }
    }, [])

    return (
        <>
            {errors.map((msg, idx) => {
                return <ErrorHandler key={idx + msg} msg={msg} />;
            })}
        </>
    );
};

export default ErrorsAlert;
