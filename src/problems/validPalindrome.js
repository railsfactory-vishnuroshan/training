"use strict";
 
var runners = require("..");
 
/**
* Determine if a string is a palindrome, considering only alphanumeric characters
* and ignoring case.
*
* Example: validPalindrome("A man, a plan, a canal: Panama") => true
*
* @param {string} s
* @return {boolean}
*/
function validPalindrome(s) {
     let data = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
     let i=0;
     let j=data.length-1;
     while(i<j){
      if(data[i]!=data[j]){
        return false;
      }
      i++;
      j--;
     }
 
return true
  
}
 
if (require.main === module) {
  runners.validPalindrome(validPalindrome);
}
 
module.exports = validPalindrome;
 