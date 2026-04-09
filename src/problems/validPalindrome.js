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
   let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left=0;
  let right=cleaned.length -1;
  while (left<right){
    if (cleaned[left]!==cleaned[right]){
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
