import React, { Component } from 'react';

import bg from '../assets/china-chef.jpg';

class Info extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="img-div col-sm-12">
            <img className="img-fluid" src={bg} alt="China Chef" />
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
                <h3 className="card-title">Delivery</h3>
                <p className="card-text">
                  South Milwaukee<br />
                  Oak Creek<br />
                  Cudahy<br />
                  *$15 minimum order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
