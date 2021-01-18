import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Transactions from '../Pages/Transactions';

const Routes = () => (
  <Switch>
    <Route exact component={Login} path="/" />
    <Route isPrivate component={Home} path="/home" />
    <Route isPrivate component={Transactions} path="/transactions" />
  </Switch>
);

export default Routes;
