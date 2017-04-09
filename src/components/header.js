import React, { Component } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h1><Link to={"/"}>China Chef</Link></h1>
          <p>
            1224 Milwaukee Ave<br />
            South Milwaukee, WI 53172<br />
            414.764.1966 • 414.764.2148
          </p>
          <div className="btn-group btn-flex" role="group" aria-label="First group">
            <LinkContainer to={"menu"}>
              <button type="button" className="btn btn-secondary">Menu</button>
            </LinkContainer>
            <button type="button" className="btn btn-secondary">Catering</button>
            <button type="button" className="btn btn-secondary">Order Online</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
