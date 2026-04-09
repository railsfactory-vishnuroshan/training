"use strict";

var runners = require("..");

/**
 * Find the index of the first non-repeating character in a string.
 * Return -1 if no such character exists.
 *
 * Example: firstUniqueChar("leetcode") => 0
 *
 * @param {string} s
 * @return {number}
 */
function firstUniqueChar(s) {
  // Write your solution here
  let arr = new Array(256).fill(0);
  for(let ch in s)
  {
    arr[s[ch].charCodeAt(0)]++;
  }
  for(let ind in s)
  {
    if(arr[s[ind].charCodeAt(0)]===1)
      return parseInt(ind);
  }
  return -1;
}

if (require.main === module) {
  runners.firstUniqueChar(firstUniqueChar);
}

module.exports = firstUniqueChar;
