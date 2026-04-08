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
  let res = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  
  return res;
}

if (require.main === module) {
  runners.reverse(reverse);
}

module.exports = reverse;
