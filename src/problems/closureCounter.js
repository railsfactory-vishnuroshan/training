"use strict";

var runners = require("..");

/**
 * Return an object with increment(), decrement(), and reset() methods that
 * maintain state via closure. Cannot use global variables.
 *
 * Example 1: const counter = createCounter(5); counter.increment() => 6
 * Example 2: const counter = createCounter(0); counter.decrement() => -1
 *
 * @param {number} n  Initial value
 * @return {{ increment: Function, decrement: Function, reset: Function }}
 */
function createCounter(n) {
  // Write your solution here
  let c = n;
  return {
    increment: function() {
      c++;
      return c;
    },
    decrement: function() {
      c--;
      return c;
    },
    reset: function() {
      c = n;
      return c;
    }
  };
}

if (require.main === module) {
  runners.closureCounter(createCounter);
}

module.exports = createCounter;
