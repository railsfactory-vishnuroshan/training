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
  let clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left=0;
  let right =clean.length-1;

  while(left<right){
    if (clean[left]!==clean[right]){
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
