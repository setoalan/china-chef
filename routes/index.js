'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoCli = require('mongodb').MongoClient;
const router = express.Router();

const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds149700.mlab.com:49700/china-chef-sm`;
const dishes = require('../models/dishes');

router.use(bodyParser.json());

router.get('/', (req, res, next) => {

  mongoCli.connect(dbUrl, (err, db) => {
    if (err) throw err;

    const appetizerCollection = db.collection('appetizers');
    appetizerCollection.find({}).toArray((err, appetizers) => {
      if (err) throw err;
      res.json(appetizers);
    });
  });

});

module.exports = router;
