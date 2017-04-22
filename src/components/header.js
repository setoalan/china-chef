import React, { Component } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import '../styles/header.css';

class Header extends Component {

  constructor(props) {
    super(props);

    this.orderOnline = this.orderOnline.bind(this);
  }

  isActivePath(path) {
    return (this.props.location.pathname === path) ? ' active' : '';
  }

  orderOnline() {
    window.location = 'http://chef.chinesemenu.com';
  }

  render() {
    return (
      <div className="row header">
        <div className="col">
          <h1><Link to={'/'}>China Chef</Link></h1>
          <p className="info">
            1224 Milwaukee Ave<br />
            South Milwaukee, WI 53172<br />
            <a href="tel:4147641966">414.764.1966</a> • <a href="tel:4147642148">414.764.2148</a>
          </p>
          <h3>Let the food talk!</h3>
          <div className="btn-group btn-flex" role="group" aria-label="header">
            <LinkContainer to={'/menu'}>
              <button
                type="button"
                className={'btn btn-outline-danger' + this.isActivePath('/menu')}>
                Menu
              </button>
            </LinkContainer>
            <LinkContainer to={'/catering'}>
              <button
                type="button"
                className={'btn btn-outline-danger' + this.isActivePath('/catering')}>
                Catering
              </button>
            </LinkContainer>
            <button type="button" className="btn btn-outline-danger" onClick={this.orderOnline}>Order Online</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
