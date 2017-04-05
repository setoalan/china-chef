import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import Menu from './components/menu';

export default (
  <Route path="/" component={App}>
    <Route path="menu" component={Menu} />
  </Route>
);
