import React, { Component } from 'react';

import '../styles/catering.css';

class Catering extends Component {

  render() {
    return (
      <div className="row catering">
        <div className="col">
          <h5>We know you are busy, so let us do the cooking.</h5>
          <p>
            Save Time<br />
            Save Money<br />
            Fast & Easy Delivery
          </p>
          <hr />
          <h2>Combo A</h2>
          <h5>$6.45 Per Person*</h5>
          <p>Includes choice of 2 entrées, 2 appetizers, white or fried rice, & fortune cookies.</p>
          <h2>Combo B</h2>
          <h5>$7.45 Per Person*</h5>
          <p>Includes choice of 3 entrées, 3 appetizers, white or fried rice, & fortune cookies.</p>
          <h2>Combo C</h2>
          <h5>$8.45 Per Person*</h5>
          <p>Includes choice of 3 entrées, 3 appetizers, white or fried rice, & fortune cookies.</p>
          <p><small>*Seafood $1 extra & minimum 10 people</small></p>
        </div>
      </div>
    );
  }
}

export default Catering;
