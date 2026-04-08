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
  let new_s=s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let rev="";
  for(let i=new_s.length-1; i>=0; --i)
    rev+=new_s.charAt(i);
  return rev==new_s;
}

if (require.main === module) {
  runners.validPalindrome(validPalindrome);
}

module.exports = validPalindrome;
