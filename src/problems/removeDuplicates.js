"use strict";

var runners = require("..");

/**
 * Remove duplicates from a sorted array in-place and return the new length.
 * Modify the array with O(1) extra memory.
 *
 * Example: removeDuplicates([1,1,2]) => 2, array becomes [1,2,...]
 *
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  // Write your solution here
  let a = nums.length;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] == nums[i+1]) {
      a--;
    }
  }
  return a;
}

if (require.main === module) {
  runners.removeDuplicates(removeDuplicates);
}

module.exports = removeDuplicates;
