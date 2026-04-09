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
function containsDuplicate(nums){
  // Write your solution here
  let map = {};
  for (let num of nums){
    if(map[num]){
      return true;
    }
    map[num]= true;
  }
  return false;
}
if (require.main === module) {
  runners.containsDuplicate(containsDuplicate);
}

module.exports = containsDuplicate;
