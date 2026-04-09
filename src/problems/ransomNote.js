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

  let count={};

  for(let char of magazine){
    count[char]=(count[char]||0)+1;
  }

  for(let char of ransomNote){
    if(!count[char]){
      return false;
    }
    count[char]--;
  }
  return true;
}

if (require.main === module) {
  runners.ransomNote(ransomNote);
}

module.exports = ransomNote;
