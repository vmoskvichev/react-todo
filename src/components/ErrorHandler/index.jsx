import React, { useState, useEffect } from 'react';
import './ErrorHandler.css'

const ErrorHandler = ({ msg }) => {
    return <div className="error-window">{msg}</div>;
};

export default ErrorHandler;
