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
 let sum = 0;
  let sum2 = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    sum2 += i;
  }

  sum2 += nums.length;

  return sum2 - sum;
}

if (require.main === module) {
  runners.missingNumber(missingNumber);
}

module.exports = missingNumber;
