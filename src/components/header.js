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
          <h1 className="title"><Link to={'/'}>CHINA CHEF</Link></h1>
          <h4>
            1224 Milwaukee Ave<br />
            South Milwaukee, WI 53172<br />
            <a href="tel:4147641966">414.764.1966</a> • <a href="tel:4147642148">414.764.2148</a>
          </h4>
          <h2>Let the food talk!</h2>
          <div className="btn-group btn-flex" role="group" aria-label="header">
            <LinkContainer to={'/menu'}>
              <button
                type="button"
                className={'btn btn-outline-danger' + this.isActivePath('/menu')}>
                MENU
              </button>
            </LinkContainer>
            <LinkContainer to={'/catering'}>
              <button
                type="button"
                className={'btn btn-outline-danger' + this.isActivePath('/catering')}>
                CATERING
              </button>
            </LinkContainer>
            <button type="button"
              className="btn btn-outline-danger"
              onClick={this.orderOnline}>
              ORDER ONLINE
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
