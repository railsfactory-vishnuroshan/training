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
  // Write your solution here
  
   if(!s ) {
      return true;
   }
   let left = 0 ;
   let right = s.length - 1;
   while(left < right){

    if(!isAlphanumeric(s[left]) ){
      left++;
      continue;
    }
    if(!isAlphanumeric(s[right])){
      right--;
      continue;
    }

    if(!isSameChar(s[left],s[right])){
      return false;
      
    }
    left++;
    right--;

   }
   return true;

}

function isAlphanumeric(char){
    const ch = char.toLowerCase();
    return (ch >='a' && ch<='z') || (ch >= '0' && ch <='9');
  }

  function isSameChar(a,b){
    return a.toLowerCase() === b.toLowerCase();
  }

if (require.main === module) {
  runners.validPalindrome(validPalindrome);
}

module.exports = validPalindrome;
