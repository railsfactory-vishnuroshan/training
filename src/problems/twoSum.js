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
      let map=new Map();
      for(let i=0;i<nums.length;i++){
        let val=target-nums[i];

      
      if (map.has(val)){
        return [map.get(val),i];
      }
      map.set(nums[i],i);
    }

 return [];
}

if (require.main === module) {
  runners.twoSum(twoSum);
}

module.exports = twoSum;
