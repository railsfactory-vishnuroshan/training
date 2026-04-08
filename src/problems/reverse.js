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
  // let result="";
  // for(let i=str.length-1;i>=0;i--){
  //   result+=str[i];
  // }
  // console.log(str);
  // return result;

  return str.split("").reverse().join("");

}

if (require.main === module) {
  runners.reverse(reverse);
}

module.exports = reverse;
