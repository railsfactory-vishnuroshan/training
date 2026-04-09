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
  if(s.length !== t.length)
  {
    return false;
  }
  let chrArr = new Uint8Array(256);
  for( let ind in s)
  {
    chrArr[s[ind].charCodeAt(0)]++;
    chrArr[t[ind].charCodeAt(0)]--;
  }
  for (let ind in chrArr)
  {
     if(chrArr[ind]!==0)
     {
       return false;
     }
  }
  return true;
}

if (require.main === module) {
  runners.validAnagram(validAnagram);
}

module.exports = validAnagram;
