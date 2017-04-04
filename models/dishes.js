'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const dishSchema = new Schema({
  name: String,
  category: String,
  label: String,
  price: Currency,
  description: String
});

module.exports = mongoose.model('Dish', dishSchema);
