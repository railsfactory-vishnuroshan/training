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
  // Write your solution here
  nums.sort();
  for(var i = 0; i < nums.length-1; i++) {
    if(nums[i] == nums[i+1]) {
      return true;
    }
  }
  return false;
}

if (require.main === module) {
  runners.containsDuplicate(containsDuplicate);
}

module.exports = containsDuplicate;
