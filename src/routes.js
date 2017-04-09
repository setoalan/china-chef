import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import Menu from './components/menu';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="menu" component={Menu} />
  </Route>
);
