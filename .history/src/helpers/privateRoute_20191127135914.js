import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route exact {...rest} render={props => (
        localStorage.getItem('anugrah-data')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/signin'}} />
    )} />
)