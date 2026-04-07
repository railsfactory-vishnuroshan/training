"use strict";

var runners = require("..");

/**
 * Return an object with increment(), decrement(), and reset() methods that
 * maintain state via closure. Cannot use global variables.
 *
 * Example: const counter = createCounter(5); counter.increment() => 6
 *
 * @param {number} n  Initial value
 * @return {{ increment: Function, decrement: Function, reset: Function }}
 */
function createCounter(n) {
  // Write your solution here
}

if (require.main === module) {
  runners.closureCounter(createCounter);
}

module.exports = createCounter;
