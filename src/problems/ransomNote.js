"use strict";

var runners = require("..");

/**
 * Return true if ransomNote can be constructed using the letters from magazine.
 * Each letter in magazine can only be used once.
 *
 * Example: ransomNote("a", "b") => false
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function ransomNote(ransomNote, magazine){
  const countMap = {};

  for (const char of magazine) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  for (const char of ransomNote) {
    if (!countMap[char]) return false;

    countMap[char]--;
  }

  return true;
}

if (require.main === module) {
  runners.ransomNote(ransomNote);
}

module.exports = ransomNote;
