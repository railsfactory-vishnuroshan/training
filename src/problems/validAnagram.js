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
  return s.split("").sort().join() === t.split("").sort().join();
}

if (require.main === module) {
  runners.validAnagram(validAnagram);
}

module.exports = validAnagram;
