import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMenu } from '../actions/index';

class Menu extends Component {
  componentWillMount() {
    this.props.fetchMenu();
  }

  renderMenu() {
    return this.props.menu.map((dish) => {
      return (
        <li key={dish._id}>{dish.name}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderMenu()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { menu: state.menu.all }
}

export default connect(mapStateToProps, { fetchMenu })(Menu);
