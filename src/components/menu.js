import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMenu } from '../actions/index';
import Header from '../components/header';

import '../styles/menu.css';

class Menu extends Component {
  componentWillMount() {
    this.props.fetchMenu();
  }

  renderTab(category) {
    return (
      <li className="nav-item">
        {category === 'appetizers' && <a className="nav-link active" data-toggle="tab" href={'#' + category}>{category}</a>}
        {category !== 'appetizers' && <a className="nav-link" data-toggle="tab" href={'#' + category}>{category}</a>}
      </li>
    );
  }

  renderTabPane(category) {
    if (category === 'appetizers') {
      return (
        <div className="tab-pane fade active show" id={category}>
          {this.renderCategory(category)}
        </div>
      );
    } else {
      return (
        <div className="tab-pane fade" id={category}>
          {this.renderCategory(category)}
        </div>
      );
    }
  }

  renderCategory(category) {
    return (
      <table className="table">
        {
          category === 'soup' &&
          <thead>
            <tr>
              <th></th>
              <th>Small</th>
              <th>Large</th>
            </tr>
          </thead>
        }
        <tbody>
          {this.renderDish(category)}
        </tbody>
      </table>
    );
  }

  renderDish(category) {
    return this.props.menu[category].map((dish) => {
      return (
        <tr key={dish._id}>
          <td>{dish.name}</td>
          {category !== 'soup' && category !== 'combination_plate' && category !== 'lunch_special' && <td>${dish.price.toFixed(2)}</td>}
          {category === 'soup' && <td>${dish.priceSize[0].toFixed(2)}</td>}
          {category === 'soup' && <td>${dish.priceSize[1].toFixed(2)}</td>}
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                <ul className="category nav nav-pills card-header-tabs">
                  {this.renderTab('appetizers')}
                  {this.renderTab('soup')}
                  {this.renderTab('seafood')}
                  {this.renderTab('beef')}
                  {this.renderTab('lo_mein')}
                  {this.renderTab('chicken')}
                  {this.renderTab('pork')}
                  {this.renderTab('vegetable')}
                  {this.renderTab('fried_rice')}
                  {this.renderTab('chop_suey')}
                  {this.renderTab('egg_foo_young')}
                  {this.renderTab('chefs_house_special')}
                  {this.renderTab('combination_plate')}
                  {this.renderTab('lunch_special')}
                </ul>
              </div>
              <div className="tab-content">
                {this.renderTabPane('appetizers')}
                {this.renderTabPane('soup')}
                {this.renderTabPane('seafood')}
                {this.renderTabPane('beef')}
                {this.renderTabPane('lo_mein')}
                {this.renderTabPane('chicken')}
                {this.renderTabPane('pork')}
                {this.renderTabPane('vegetable')}
                {this.renderTabPane('fried_rice')}
                {this.renderTabPane('chop_suey')}
                {this.renderTabPane('egg_foo_young')}
                {this.renderTabPane('chefs_house_special')}
                {this.renderTabPane('combination_plate')}
                {this.renderTabPane('lunch_special')}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { menu: state.menu.all }
}

export default connect(mapStateToProps, { fetchMenu })(Menu);
