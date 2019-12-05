import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route exact {...rest} render={props => (
        localStorage.getItem('anugrah-data')
            ? <Redirect to={{ pathname: '/' }} />
            : <Component {...props} />
    )} />
)