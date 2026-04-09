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
  let n=nums.length;
  for(var i=0;i<=n;i++){
    if(!nums.includes(i)){
      return i;
      break;
    }
  }
}

if (require.main === module) {
  runners.missingNumber(missingNumber);
}

module.exports = missingNumber;
