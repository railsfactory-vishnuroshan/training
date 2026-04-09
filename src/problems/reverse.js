"use strict";

var runners = require("..");

/**
 * Given a string, return it reversed.
 *
 * Example: reverse('hello') => 'olleh'
 *
 * @param {string} str
 * @return {string}
 */
function reverse(str) {
  // Write your solution here
  let rev =str.split("");
  let i=0, j= str.length;
  while(i<j)
  {
    let temp = str[i];
     rev[i]=str[j];
     rev[j]=temp;
     i++;
     j--;
  }
  return rev.join("");
  console.log(str);
}

if (require.main === module) {
  runners.reverse(reverse);
}

module.exports = reverse;
