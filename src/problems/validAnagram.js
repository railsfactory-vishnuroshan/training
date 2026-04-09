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
    if(s.length!=t.length){
      return false;
    }
  let ans=new Array(26).fill(0);
  for(let i=0;i<s.length;i++){
    ans[s.charCodeAt(i)-97]++;
    ans[t.charCodeAt(i)-97]--;
  }
  for(let val of ans){
    if(val!=0){
      return false;
    }
  }
 
return true;
    
  // Write your solution here
}
 
if (require.main === module) {
  runners.validAnagram(validAnagram);
}
 
module.exports = validAnagram