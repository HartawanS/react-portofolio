import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { history } from './history'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route history={history} {...rest} render={props => (
        localStorage.getItem('A D')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/signin'}} />
    )} />
)