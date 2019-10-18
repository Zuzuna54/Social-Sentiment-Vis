/* jshint node: true, strict: true */

"use strict";

var BackoffStrategy = require('backoff/lib/strategy/strategy'),
    util = require('util');



/** 
  * Constructs a linear backoff (10, 20, 30, 40, 50, etc.).
  * @class
  *
  * @param {Object} options Configuration options
  * @param {Number} options.initialDelay Initial delay in milliseconds
  * @param {Number} options.maxDelay Max delay in milliseconds
  */

var LinearBackoffStrategy = module.exports = function (options) {
    BackoffStrategy.call(this, options);
    this.backoffDelay_ = 0;
    this.nextBackoffDelay_ = this.getInitialDelay();
};
util.inherits(LinearBackoffStrategy, BackoffStrategy);



/** 
  * Compute and return the next backoff delay in milliseconds
  */

LinearBackoffStrategy.prototype.next_ = function () {
    this.backoffDelay_ = Math.min(this.nextBackoffDelay_, this.getMaxDelay());
    this.nextBackoffDelay_ = this.backoffDelay_ + this.getInitialDelay();
    return this.backoffDelay_;
};



/** 
  * Resets the backoff delay to its initial value.
  */

LinearBackoffStrategy.prototype.reset_ = function () {
    this.backoffDelay_ = 0;
    this.nextBackoffDelay_ = this.getInitialDelay();
};
