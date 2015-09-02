'use strict';
var async = require('async');

module.exports = function(app) {
  // data sources
  var mongoDs = app.dataSources.mongoDs;
  var postgresDs = app.dataSources.postgresDs;

  // In the future this will seed more resources
  async.parallel({
    coffeeShops: async.apply(createCoffeeShops)
  }, function(err, results) {
    if (err) throw err;

    console.log('Models created successfully!');
  });

  function createCoffeeShops(cb) {
    postgresDs.automigrate('CoffeeShop', function(err) {
      if (err) return cb(err);

      app.models.CoffeeShop.create([
        { name: 'Mario\'s Pizzeria', city: 'New York' },
        { name: 'Josh\'s Ristorante', city: 'New York' }
      ], cb);
    });
  }


};
