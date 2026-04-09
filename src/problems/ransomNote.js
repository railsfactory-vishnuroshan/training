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
  let arr = new Array(256).fill(0);
  for(let ind in ransomNote)
  {
    arr[ransomNote[ind].charCodeAt(0)]++;
  }
  for(let ind in magazine)
  {
    arr[magazine[ind].charCodeAt(0)]--;
  }
  for(let ind in arr)
  {
    if(arr[ind] > 0 )
    {
      return false;
    }
  }
  return true;
}

if (require.main === module) {
  runners.ransomNote(ransomNote);
}

module.exports = ransomNote;
