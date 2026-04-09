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
  let left=0;
  let right=s.length-1;
  while(left<right){
    while(left<right && !isAlphaNumeric(s[left])){
      left++;
    }
    while(left<right && !isAlphaNumeric(s[right])){
      right--;
    }
    if(s[left].toLowerCase()!==s[right].toLowerCase()){
      return false;
    }
    left++;
    right--;
  }
  return true;
}
function isAlphaNumeric(char){
  return /^[a-z0-9]$/i.test(char);
}

if (require.main === module) {
  runners.validPalindrome(validPalindrome);
}

module.exports = validPalindrome;
