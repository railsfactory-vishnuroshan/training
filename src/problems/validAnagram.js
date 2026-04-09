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

  const countMap = {};

  for (const char of s) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  for (const char of t) {
    if (!countMap[char]) return false;

    countMap[char]--;
  }

  return true;
}

if (require.main === module) {
  runners.validAnagram(validAnagram);
}

module.exports = validAnagram;
