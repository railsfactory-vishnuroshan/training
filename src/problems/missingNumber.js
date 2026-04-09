"use strict";

var runners = require("..");

/**
 * Given an array containing n distinct numbers in range [0, n], find the missing one.
 *
 * Example: missingNumber([3,0,1]) => 2
 *
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  // Write your solution here

  let total = nums.length*(nums.length + 1)/2;
  let sum = 0;
  for(let ind in nums)
  {
    sum+=nums[ind];
  }
  return total - sum;
}

if (require.main === module) {
  runners.missingNumber(missingNumber);
}

module.exports = missingNumber;
