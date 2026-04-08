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
  const freq = {};
  for(const char of s){
    freq[char] =(freq[char]||0)+1;
  }
  for(let i=0;s.length;i++){
    if(freq[s[i]] === 1){
      return i;
    }
  }
  return -1;
}

if (require.main === module) {
  runners.firstUniqueChar(firstUniqueChar);
}

module.exports = firstUniqueChar;
