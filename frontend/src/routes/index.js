import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../Pages/Login';

const Routes = () => (
  <Switch>
    <Route exact component={Login} />
  </Switch>
);

export default Routes;
