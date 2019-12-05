import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import { PublicRoute } from './helpers/publicRoute';
import { PrivateRoute } from './helpers/privateRoute';
import { Auth } from "./layouts"
import Admin from './layouts/Admin';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <PublicRoute path="/signin" component={Auth} />
            <PrivateRoute path="/admin" component={Admin} />
            <Redirect from="/" to="/signin"/>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root'));
