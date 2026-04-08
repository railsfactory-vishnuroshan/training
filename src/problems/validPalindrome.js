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
      s=s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
      let start=0;
      let end=s.length-1;
      while(start<=end)
      {
        if(s[start]!=s[end])
        {
           return false;
        }
        start++;
        end--;
      }
      return true;
}

if (require.main === module) {
  runners.validPalindrome(validPalindrome);
}

module.exports = validPalindrome;
