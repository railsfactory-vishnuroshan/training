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
  let rev="";
  for(let i=str.length-1; i>=0; --i)
    rev+=str.charAt(i);
  return rev;
  console.log(str)
}

if (require.main === module) {
  runners.reverse(reverse);
}

module.exports = reverse;
