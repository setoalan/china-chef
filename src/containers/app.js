import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header location={this.props.location} />
        {this.props.children}
        <Footer />
      </div>
    );
  }

}

export default App;