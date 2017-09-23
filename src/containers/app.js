import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/container.css';

class App extends Component {

  render() {
    return (
      <div className="container__react">
        <Header location={this.props.location} />
        {this.props.children}
        <Footer />
      </div>
    );
  }

}

export default App;
