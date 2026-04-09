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

  let str = s.toLowerCase();
  let i = 0, j = str.length-1;
  while(i<j)
  {
    if( str[i] >= 'a' && str[i] <= 'z' || str[i] >= '0' && str[i] <= '9' )
    {
      if( str[j] >= 'a' && str[j] <= 'z' || str[j] >= '0' && str[j] <= '9')
      {
         if(str[i] === str[j])
         {
           i++;
           j--;
         }
         else
         {
          return false;
         }
        
      }
      else{
      j--;
      }
    }
    else
    { 
      i++;
    }
  }
  return true;
}
 
if (require.main === module) {
  runners.validPalindrome(validPalindrome);
}

module.exports = validPalindrome;
