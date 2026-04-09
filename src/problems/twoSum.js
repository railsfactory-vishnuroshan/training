"use strict";

var runners = require("..");

/**
 * Given an array of numbers and a target sum, return the indices of the two
 * numbers that add up to the target.
 *
 * Example: twoSum([2, 7, 11, 15], 9) => [0, 1]
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Write your solution here
   let map = {};
  for (let i=0;i<nums.length;i++){
    let diff=target-nums[i];
    if (diff in map) {
      return [map[diff],i];
    }
    map[nums[i]]=i;
  }
}
if (require.main===module){
  runners.twoSum(twoSum);
}

module.exports = twoSum;
