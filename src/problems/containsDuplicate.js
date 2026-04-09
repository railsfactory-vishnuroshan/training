"use strict";
 
var runners = require("..");
 
/**
* Return true if any value appears at least twice in the array, false otherwise.
*
* Example: containsDuplicate([1,2,3,1]) => true
*
* @param {number[]} nums
* @return {boolean}
*/
function containsDuplicate(nums) {
  let set=new Set();
    for(let num of nums){
        if(set .has(num)){
          return true
        }
        set.add(num);
    }
    return false;
    }
  // Write your solution here
 
 
if (require.main === module) {
  runners.containsDuplicate(containsDuplicate);
}
 
module.exports = containsDuplicate;
 

 