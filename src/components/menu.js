import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMenu } from '../actions/index';

import '../styles/menu.css';

class Menu extends Component {

  componentWillMount() {
    this.props.fetchMenu();
  }

  renderTab(category) {
    let categoryName = category.replace(/_/g, ' ');
    categoryName = (category === 'chefs_house_special') ? categoryName.replace('fs', 'f\'s') : categoryName;

    return (
      <li className="nav-item">
        <a
          className={"nav-link" + (category === 'appetizers' ? ' active' : '')}
          data-toggle="tab"
          href={'#' + category}>
          {categoryName}
        </a>
      </li>
    );
  }

  renderTabPane(category) {
    return (
      <div className={"tab-pane fade" + (category === 'appetizers' ? ' active show' : '')} id={category}>
        <div className="menu-category">
          {
            category !== 'appetizers' &&
            category !== 'soup' &&
            category !== 'lo_mein' &&
            category !== 'fried_rice' &&
            <div className="category-info">{this.renderCategoryInfo(category)}</div>
          }
          {this.renderDish(category)}
        </div>
      </div>
    );
  }

  renderCategoryInfo(category) {
    switch (category) {
    case 'chop_suey':
      return (<h6>(Served w. choice of white rice or crispy noodles.)</h6>);
    case 'combination_plate':
      return (
        <h6>
          Small 7.95 &nbsp; Large 9.45<br />
          <small>
            (Served w. egg roll and fried rice.<br />
            Lo mein dishes only w. egg roll only.)
          </small>
        </h6>
      );
    case 'lunch_special':
      return (
        <h6>
          Monday - Friday: 11:00 am - 2:30 pm<br />
          <small>(Served w. egg roll and fried rice.)</small>
        </h6>
      );
    default:
      return (<h6>(Served w. white rice.)</h6>)
    }
  }

  renderDish(category) {
    if (category !== 'combination_plate' && category !== 'lunch_special') {
      return this.props.menu[category].map((dish) => {
        return (
          <div className="menu-item" key={dish.id}>
            <p>
              {dish.name} {dish.spicy === true && <span>🌶</span>}
              {dish.description !== undefined && <span><br /><small>{dish.description}</small></span>}
            </p>
            {category !== 'soup' && <p>{dish.price.toFixed(2)}</p>}
            {category === 'soup' && !dish.priceSize[1] && <p>{dish.priceSize[0].toFixed(2)}</p>}
            {category === 'soup' && dish.priceSize[1] && <p>{dish.priceSize[1].toFixed(2)} &nbsp; {dish.priceSize[0].toFixed(2)}</p>}
          </div>
        );
      });
    } else {
      return this.props.menu[category].map((dish) => {
        const dishCategory = dish.dish_id.match(/([a-z])\w+/g);
        const foundDish = this.props.menu[dishCategory].find(dishItem => dishItem.id === dish.dish_id);
        return (
          <div className="menu-item" key={foundDish.id}>
            <p>{foundDish.name}</p>
          </div>
        )

      });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="menu">
              <div className="card text-center">
                <div className="card-header">
                  <ul className="category-tabs nav nav-pills card-header-tabs">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { menu: state.menu.all }
}

export default connect(mapStateToProps, { fetchMenu })(Menu);
