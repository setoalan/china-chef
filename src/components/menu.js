import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMenu } from '../actions/index';
import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/menu.css';

class Menu extends Component {
  componentWillMount() {
    this.props.fetchMenu();
  }

  renderTab(category) {
    return (
      <li className="nav-item">
        <a className={"nav-link" + (category === 'appetizers' ? ' active' : '')} data-toggle="tab" href={'#' + category}>{category}</a>
      </li>
    );
  }

  renderTabPane(category) {
    return (
      <div className={"tab-pane fade" + (category === 'appetizers' ? ' active show' : '')} id={category}>
        {this.renderCategory(category)}
      </div>
    );
  }

  renderCategory(category) {
    return (
      <div className="menu-category">
        {this.renderDish(category)}
      </div>
    );
  }

  renderDish(category) {
    return this.props.menu[category].map((dish) => {
      return (
        <div className="menu-item">
          <p>
            {dish.name}<br />
            <small>{dish.description}</small>
          </p>
          {category !== 'soup' && category !== 'combination_plate' && category !== 'lunch_special' && <p>${dish.price.toFixed(2)}</p>}
          {category === 'soup' && <p>${dish.priceSize[0].toFixed(2)}</p>}
          {category === 'soup' && <p>${dish.priceSize[1].toFixed(2)}</p>}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col">
            <div className="menu">
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
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { menu: state.menu.all }
}

export default connect(mapStateToProps, { fetchMenu })(Menu);
