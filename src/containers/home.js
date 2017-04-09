import React, { Component } from 'react';

import Header from '../components/header';
import Info from '../components/info';
import Footer from '../components/footer';
import '../styles/home.css';

class Home extends Component {
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

export default Home;
