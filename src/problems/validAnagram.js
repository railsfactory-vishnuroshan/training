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
  if(s.length !== t.length ){
    return false;
  }
  const tab = {};

  for ( let char of s){
    tab[char] = (tab[char] || 0) + 1; // i have built a hashtable and incremented every char with 1 
  }
  for ( let char of t){
    if ( !tab[char]) {
      return false;
      
    }
    tab[char]--; // i will traverse t and check with table which has string s  and decrement it 
  }
      return true;

}

if (require.main === module) {
  runners.validAnagram(validAnagram);
}

module.exports = validAnagram;
