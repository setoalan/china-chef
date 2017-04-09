import React, { Component } from 'react';

import Header from './header';
import Info from './info';
import Footer from './footer';
import '../styles/app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
        <Footer />
      </div>
    );
  }
}
