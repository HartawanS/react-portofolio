import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import { PublicRoute } from './helpers/publicRoute';
import { PrivateRoute } from './helpers/privateRoute';
import { Auth } from "./layouts"

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <PublicRoute path="/signin" component={Auth} />
            {/* <PrivateRoute path="/admin" component={Admin} /> */}
            <Redirect from="/" to="/signin"/>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
