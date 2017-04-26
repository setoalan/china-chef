import React, { Component } from 'react';

import '../styles/home.css';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="row" style={{'display':'none'}}>
          <div className="col">
            <div className="alert alert-danger" role="alert">
              <strong>Special Event</strong>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="title">CHINA CHEF</h1>
            <h4 className="info">
              1224 Milwaukee Ave<br />
              South Milwaukee, WI 53172<br />
              <a href="tel:4147641966">414.764.1966</a> • <a href="tel:4147642148">414.764.2148</a>
            </h4>
            <h2 className="slogan">Let the food talk!</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 info-div">
            <div className="card">
              <div className="card-block">
                <h3 className="card-title">Hours</h3>
                <p className="card-text">
                  Mon - Thu: 11 am - 9:30 pm<br />
                  Fri: 11 am - 10 pm<br />
                  Sat: 11 am - 9:30 pm<br />
                  Sun: 12 pm - 9 pm
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 info-div">
            <div className="card">
              <div className="card-block">
                <h3 className="card-title">Lunch Buffet</h3>
                <p className="card-text">
                  Mon - Fri: 11 am - 2 pm<br />
                  Sat: 11:30 am - 2 pm
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 info-div">
            <div className="card">
              <div className="card-block">
                <h3 className="card-title">We Deliver</h3>
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
