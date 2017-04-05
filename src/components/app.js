import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        China Chef
        {this.props.children}
      </div>
    );
  }
}
