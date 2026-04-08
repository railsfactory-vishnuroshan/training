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
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "").trim();
  var a = 0, b = str.length-1;
  while(a < b) {
    if(str[a] != str[b]) {
      return false;
    }
    a++;
    b--;
  }
  return true;
}

if (require.main === module) {
  runners.validPalindrome(validPalindrome);
}

module.exports = validPalindrome;
