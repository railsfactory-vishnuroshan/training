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
function validAnagram(s,t){
  // Write your solution here
  if (s.length !==t.length) 
    return false;
  let map = {};
  for (let char of s){
    map[char] = (map[char]|| 0) + 1;
  }
  for (let char of t){
    if (!map[char]) 
    return false;
    map[char]--;
  }
  return true;
}
if (require.main === module){
  runners.validAnagram(validAnagram);
}

module.exports = validAnagram;
