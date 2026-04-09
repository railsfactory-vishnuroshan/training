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
  let string=s.replace(/[^a-z0-9]/gi,"").toLowerCase();
   let left=0;

   let right=string.length-1;
   while(left<right){
    if(string[left]!=string[right]){
      return false;
    }
    left++;
    right--;
   }
   return true;
}

if (require.main === module) {
  runners.validPalindrome(validPalindrome);
}

module.exports = validPalindrome;
