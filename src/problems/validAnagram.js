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
  if (s.length !== t.length) return false;
  const charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}

if (require.main === module) {
  runners.validAnagram(validAnagram);
}

module.exports = validAnagram;
