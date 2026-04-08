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
  var sum=0;
  var sum1=0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    sum1 += i; 
  }
  sum1 += nums.length;

  return sum1 - sum;

}

if (require.main === module) {
  runners.missingNumber(missingNumber);
}

module.exports = missingNumber;
