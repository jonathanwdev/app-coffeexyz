import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../Pages/Login';
import Home from '../Pages/Home';

const Routes = () => (
  <Switch>
    <Route exact component={Login} path="/" />
    <Route isPrivate component={Home} path="/home" />
  </Switch>
);

export default Routes;
