import React from 'react';
import { Redirect } from 'react-router-dom';
import { TokenContext } from '../../tokenContext';

const PrivateRoute = (WrappedComponent) => (props) => {
    return (
        <TokenContext.Consumer>
            {({ token: isAuthorized }) =>
                isAuthorized ? (
                    <WrappedComponent {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login' }} />
                )
            }
        </TokenContext.Consumer>
    );
};

const UnPrivateRoute = (WrappedComponent) => (props) => {
    return (
        <TokenContext.Consumer>
            {({ token: isAuthorized }) =>
                isAuthorized ? (
                    <Redirect to={{ pathname: '/' }} />
                ) : (
                    <WrappedComponent {...props} />
                )
            }
        </TokenContext.Consumer>
    );
};

export { PrivateRoute, UnPrivateRoute };
