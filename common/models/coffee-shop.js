'use strict';

module.exports = function(CoffeeShop) {
  CoffeeShop.status = function(cb) {
    var response = null;
    var currentDate = new Date();
    var currentHour = currentDate.getHours();

    const OPEN_HOUR = 6;
    const CLOSE_HOUR = 20;

    console.log('Current hour is ' + currentHour);

    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open faily from 6am to 8pm.';
    }

    cb(null, response);
  };

  CoffeeShop.remoteMethod(
    'status',
    {
      http: { path: '/status', verb: 'get' },
      returns: { arg: 'status', type: 'string' }
    }
  );
};
