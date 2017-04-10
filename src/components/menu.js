import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMenu } from '../actions/index';
import Header from '../components/header';

import '../styles/menu.css';

class Menu extends Component {
  componentWillMount() {
    this.props.fetchMenu();
  }

  renderCategory(category) {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card">
          <h3 className="card-header">{category}</h3>
          <div className="card-block">
            <table className="table">
              <tbody>
                {this.renderDish(category)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  renderDish(category) {
    return this.props.menu[category].map((dish) => {
      return (
        <tr key={dish._id}>
          <td>{dish.name}</td>
          {category !== 'soups' && <td>${dish.price.toFixed(2)}</td>}
          {category === 'soups' && <td>${dish.priceSize[0].toFixed(2)}</td>}
          {category === 'soups' && <td>${dish.priceSize[1].toFixed(2)}</td>}
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          {this.renderCategory('appetizers')}
          {this.renderCategory('soups')}
          {this.renderCategory('seafoods')}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { menu: state.menu.all }
}

export default connect(mapStateToProps, { fetchMenu })(Menu);
