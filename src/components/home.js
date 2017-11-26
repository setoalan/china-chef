import React, { Component } from 'react';

import '../styles/home.css';

class Home extends Component {

  render() {
    return (
      <div className="container__home">
        <div className="row">
          <div className="col">
            <h1 className="header__main">CHINA CHEF</h1>
            <h3 className="header__info">
              1224 Milwaukee Ave<br />
              South Milwaukee, WI 53172<br />
              <a href="tel:4147641966">414.764.1966</a> • <a href="tel:4147642148">414.764.2148</a>
            </h3>
            <h2 className="header__slogan">LET THE FOOD TALK!</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="alert block__special-event" role="alert">
              <strong>Christmas Eve Buffet 12 pm - 8 pm</strong><br />
              <strong>Closed Christmas Day</strong><br />
              <strong>New Year's Eve Buffet 12 pm - 8 pm</strong>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 container__column">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">HOURS</h4>
                <p className="card-text">
                  Mon - Thu: 11 am — 9:30 pm<br />
                  Fri: 11 am — 10 pm<br />
                  Sat: 11 am — 9:30 pm<br />
                  Sun: 12 pm — 9 pm
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 container__column">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">LUNCH BUFFET</h4>
                <p className="card-text">
                  Mon - Fri: 11 am — 2 pm<br />
                  Sat: 11:30 am — 2 pm
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 container__column">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">WE DELIVER</h4>
                <p className="card-text">
                  South Milwaukee<br />
                  Oak Creek<br />
                  Cudahy<br />
                  <small>*$15 minimum order</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
