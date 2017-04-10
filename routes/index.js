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

    let menu = {};

    const appetizerCollection = db.collection('appetizers');
    appetizerCollection.find({}).toArray((err, appetizers) => {
      if (err) throw err;
      menu.appetizers = appetizers;

      const soupCollection = db.collection('soups');
      soupCollection.find({}).toArray((err, soups) => {
        if (err) throw err;
        menu.soups = soups;

        const seafoodCollection = db.collection('seafoods');
        seafoodCollection.find({}).toArray((err, seafoods) => {
          if (err) throw err;
          menu.seafoods = seafoods;

          res.json(menu);
        });

      });

    });

  });
});

module.exports = router;
