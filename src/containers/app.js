import React, { Component } from 'react';

import Header from '../components/header';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header location={this.props.location} />
        {this.props.children}
      </div>
    );
  }

}

export default App;
