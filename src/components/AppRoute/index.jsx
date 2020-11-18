import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { TokenContext } from '../../tokenContext';


const AppRoute = ({component: Component, isPrivate, ...props }) => {
    const isAuthenticated = useContext(TokenContext);

    return (
            <Route 
                render={props => 
                    isPrivate && !isAuthenticated ? (
                        <Redirect exact to={{pathname: '/login'}} /> 
                    ) : (
                        <Component {...props} />
                    )
                }
                {...props}
            />
    )

}
export default AppRoute;



// const AppRoute = ({component: Component, path, isPrivate, ...props }) => {
//     const isAuthenticated = useContext(TokenContext);

//     return isAuthenticated ? <Component {...props} /> : <Redirect exact to={{pathname: '/login'}} /> 

// }
// export default AppRoute;