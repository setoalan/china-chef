import React, { Component } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import '../styles/header.css';

class Header extends Component {

  isActivePath(path) {
   return (this.props.location.pathname === path) ? ' active' : '';
 }

  render() {
    return (
      <div className="row header">
        <div className="col-sm-12">
          <h1><Link to={"/"}>China Chef</Link></h1>
          <p>
            1224 Milwaukee Ave<br />
            South Milwaukee, WI 53172<br />
            414.764.1966 • 414.764.2148
          </p>
          <div className="btn-group btn-flex" role="group" aria-label="First group">
            <LinkContainer to={'/menu'}>
              <button
                type="button"
                className={"btn btn-outline-danger" + this.isActivePath('/menu')}>
                Menu
              </button>
            </LinkContainer>
            <LinkContainer to={'/catering'}>
              <button
                type="button"
                className={"btn btn-outline-danger" + this.isActivePath('/catering')}>
                Catering
              </button>
            </LinkContainer>
            <button type="button" className="btn btn-outline-danger">Order Online</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
