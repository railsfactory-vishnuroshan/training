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
  let arr=str.split("");
  let i=0;
  let j=str.length-1;
  while(i<j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
  }
  return arr.join("");
  // Write your solution here
 
}
 
if (require.main === module) {
  runners.reverse(reverse);
}
 
module.exports = reverse;