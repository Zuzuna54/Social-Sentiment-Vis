/* jshint node: true, strict: true */

"use strict";


var LinearBackoffStrategy = require('../'),
    Backoff = require('backoff/lib/backoff');



var linear = new Backoff(new LinearBackoffStrategy({
    initialDelay: 50,
    maxDelay: 500
}));

linear.failAfter(10);

linear.on('backoff', function (number, delay) {
    console.log(number + ' ' + delay + 'ms');
});

linear.on('ready', function (number, delay) {
    linear.backoff();
});

linear.on('fail', function (number, delay) {
    console.log('fail');
});

linear.backoff();
