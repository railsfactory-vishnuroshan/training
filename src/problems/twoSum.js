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
  let res=new Map();
  for(let i=0;i<nums.length;i++){
    const complement=target-nums[i];
    if(res.has(complement)){
      return [res.get(complement),i];
    }
    res.set(nums[i],i);
  }
}

if (require.main === module) {
  runners.twoSum(twoSum);
}

module.exports = twoSum;
