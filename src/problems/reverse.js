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
  // Write your solution here
  var s = "";
  for(var i = str.length-1; i >= 0; i--) {
    s += str[i];
  }
  return s;
}

if (require.main === module) {
  runners.reverse(reverse);
}

module.exports = reverse;
