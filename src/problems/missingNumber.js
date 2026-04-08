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
  var sum = 0, sum1 = 0;
  for(var i = 0; i <= nums.length; i++) {
    sum += i;
  }
  for(var i = 0; i < nums.length; i++) {
    sum1 += nums[i];
  }
  return sum-sum1;
}

if (require.main === module) {
  runners.missingNumber(missingNumber);
}

module.exports = missingNumber;
