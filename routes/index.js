'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoCli = require('mongodb').MongoClient;
const router = express.Router();

const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URI}`;
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

      const soupCollection = db.collection('soup');
      soupCollection.find({}).toArray((err, soup) => {
        if (err) throw err;
        menu.soup = soup;

        const seafoodCollection = db.collection('seafood');
        seafoodCollection.find({}).toArray((err, seafood) => {
          if (err) throw err;
          menu.seafood = seafood;

          const beefCollection = db.collection('beef');
          beefCollection.find({}).toArray((err, beef) => {
            if (err) throw err;
            menu.beef = beef;

            const lo_meinCollection = db.collection('lo_mein');
            lo_meinCollection.find({}).toArray((err, lo_mein) => {
              if (err) throw err;
              menu.lo_mein = lo_mein;

              const chickenCollection = db.collection('chicken');
              chickenCollection.find({}).toArray((err, chicken) => {
                if (err) throw err;
                menu.chicken = chicken;

                const porkCollection = db.collection('pork');
                porkCollection.find({}).toArray((err, pork) => {
                  if (err) throw err;
                  menu.pork = pork;

                  const vegetableCollection = db.collection('vegetable');
                  vegetableCollection.find({}).toArray((err, vegetable) => {
                    if (err) throw err;
                    menu.vegetable = vegetable;

                    const friedRiceCollection = db.collection('fried_rice');
                    friedRiceCollection.find({}).toArray((err, fried_rice) => {
                      if (err) throw err;
                      menu.fried_rice = fried_rice;

                      const chopSueyCollection = db.collection('chop_suey');
                      chopSueyCollection.find({}).toArray((err, chop_suey) => {
                        if (err) throw err;
                        menu.chop_suey = chop_suey;

                        const eggFooYoungCollection = db.collection('egg_foo_young');
                        eggFooYoungCollection.find({}).toArray((err, egg_foo_young) => {
                          if (err) throw err;
                          menu.egg_foo_young = egg_foo_young;

                          const chefsHouseSpecialCollection = db.collection('chefs_house_special');
                          chefsHouseSpecialCollection.find({}).toArray((err, chefs_house_special) => {
                            if (err) throw err;
                            menu.chefs_house_special = chefs_house_special;

                            const combinationPlateCollection = db.collection('combination_plate');
                            combinationPlateCollection.find({}).toArray((err, combination_plate) => {
                              if (err) throw err;
                              menu.combination_plate = combination_plate;

                              const lunchSpecialCollection = db.collection('lunch_special');
                              lunchSpecialCollection.find({}).toArray((err, lunch_special) => {
                                if (err) throw err;
                                menu.lunch_special = lunch_special;

                                res.json(menu);
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

module.exports = router;
