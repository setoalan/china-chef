import React, { Component } from 'react';
// eslint-disable-next-line
import { LinkContainer } from 'react-router-bootstrap';

import '../styles/header.css';

class Header extends Component {

  constructor(props) {
    super(props);

    this.orderOnline = this.orderOnline.bind(this);
    console.log(props);
  }

  isActivePath(path) {
    return (this.props.location.pathname === path) ? ' active' : '';
  }

  orderOnline() {
    window.location = 'http://chef.chinesemenu.com';
  }

  render() {
    return (
      <div className="container__header row">
        <div className="col">
          <div className="btn-group btn-flex" role="group" aria-label="header">
            {/* <LinkContainer to={'/'}>
              <button
                type="button"
                className={'btn btn-outline-danger'}>
                className={'btn btn-outline-danger' + this.isActivePath('/')}>
                HOME
              </button>
            </LinkContainer>
            <LinkContainer to={'/menu'}>
              <button
                type="button"
                className={'btn btn-outline-danger'}>
                className={'btn btn-outline-danger' + this.isActivePath('/menu')}>
                MENU
              </button>
            </LinkContainer>
            <LinkContainer to={'/catering'}>
              <button
                type="button"
                className={'btn btn-outline-danger'}>
                className={'btn btn-outline-danger' + this.isActivePath('/catering')}>
                CATERING
              </button>
            </LinkContainer> */}
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
