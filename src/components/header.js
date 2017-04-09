import React, { Component } from 'react';

import bg from '../assets/china-chef.jpg';

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>China Chef</h1>
          <p>
            1224 Milwaukee Ave<br />
            South Milwaukee, WI 53172<br />
            414.764.1966 • 414.764.2148
          </p>
          <div className="btn-group btn-flex" role="group" aria-label="First group">
            <button type="button" className="btn btn-secondary">Menu</button>
            <button type="button" className="btn btn-secondary">Catering</button>
            <button type="button" className="btn btn-secondary">Order Online</button>
          </div>
        </div>
        <div className="img-div col-sm-12">
          <img className="img-fluid" src={bg} alt="China Chef" />
        </div>
      </div>
    );
  }
}

export default Header;
