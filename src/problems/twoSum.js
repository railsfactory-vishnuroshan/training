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

  const tab = {};

  for(let i=0;i<nums.length;i++){
    const carry = target - nums[i];

    if(tab.hasOwnProperty(carry)){
      return [tab[carry],i] ;
    }
    tab[nums[i]] = i;
  }


}

if (require.main === module) {
  runners.twoSum(twoSum);
}

module.exports = twoSum;
