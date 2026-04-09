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
  if(s.length!== t.length)
    return false;
   const map=new Map();
   for (let str of s){
    map.set(str,(map.get(str)||0)+1);
   }
   for(let str of t){
    if(!map.has(str))
      return false;
   
   map.set(str,map.get(str)-1);
   if(map.get(str)<0)
    return false;
  }

  return true;
}

if (require.main === module) {
  runners.validAnagram(validAnagram);
}

module.exports = validAnagram;
