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
  const n = nums.length;
  const expSum = (n*(n+1))/2;

  let sum = 0;
  for(let i = 0;i<n ; i++){
    sum +=nums[i];
  }
  return expSum - sum ;

}

if (require.main === module) {
  runners.missingNumber(missingNumber);
}

module.exports = missingNumber;
