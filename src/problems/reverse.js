"use strict";

var runners = require("..");

/**
 * Given a string, return it reversed.
 *
 * Example: reverse('hello') => 'olleh'
 *
 * @param {string} str
 * @return {string}
 */
function reverse(str) {
  return str.split("").reverse().join("");
}

if (require.main === module) {
  runners.reverse(reverse);
}

module.exports = reverse;
