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
 let map=new Map();
  for(let char of magazine){
    map.set(char,(map.get(char)||0)+1);
  }
  for(let char of ransomNote){
    if(!map.get(char)){
      return false;
    }
    map.set(char,map.get(char)-1);
  }
  return true;
}
if (require.main === module) {
  runners.ransomNote(ransomNote);
}

module.exports = ransomNote;
