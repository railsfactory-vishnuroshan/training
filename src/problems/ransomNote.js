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
  const freq = {};

  for(let ch of magazine){
    freq[ch] = (freq[ch] || 0)+1;
  }
  for(let ch of ransomNote){
    if(!freq[ch]){
      return false;
    }
    freq[ch]--;
  }
return true;

}

if (require.main === module) {
  runners.ransomNote(ransomNote);
}

module.exports = ransomNote;
