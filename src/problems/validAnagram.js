"use strict";

var runners = require("..");

/**
 * Return true if t is an anagram of s, false otherwise.
 *
 * Example: validAnagram("anagram", "nagaram") => true
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function validAnagram(s, t) {
  // Write your solution here
  const a = s.split("").sort().join("");
  const b = t.split("").sort().join("");
  if(a === b) {
    return true;
  }
  return false;
}

if (require.main === module) {
  runners.validAnagram(validAnagram);
}

module.exports = validAnagram;
