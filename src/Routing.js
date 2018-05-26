import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);
