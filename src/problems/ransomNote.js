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
function ransomNote(ransomNote, magazine) {
  // Write your solution here
  const counts = {};
    for (const char of magazine) {
        counts[char] = (counts[char] || 0) + 1;
    }
    for (const char of ransomNote) {
        if (!counts[char]) {
            return false;
        }
        counts[char]--;
    }

    return true;
}

if (require.main === module) {
  runners.ransomNote(ransomNote);
}

module.exports = ransomNote;
