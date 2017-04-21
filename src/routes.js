import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './components/home';
import Menu from './components/menu';
import Catering from './components/catering';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="menu" component={Menu} />
    <Route path="catering" component={Catering} />
  </Route>
);
