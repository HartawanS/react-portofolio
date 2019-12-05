import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect, Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import { PublicRoute } from './helpers/publicRoute';
import { PrivateRoute } from './helpers/privateRoute';
import { Auth } from "./layouts"
import Admin from './layouts/Admin';
// import { createBrowserHistory } from 'history';

// export const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter>
        <Router>
            <Switch>
                <PublicRoute path="/signin" component={Auth} />
                <PrivateRoute path="/admin" component={Admin} />
                <Redirect from="/" to="/signin"/>
            </Switch>
        </Router>
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
