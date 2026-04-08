"use strict";

var runners = require("..");

/**
 * Find the maximum number of consecutive 1s in a binary array.
 *
 * Example: maxConsecutiveOnes([1,1,0,1,1,1]) => 3
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxConsecutiveOnes(nums) {
  // Write your solution here
  var c = 0, max = 0;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] == 1) {
      c++;
    }
    else {
      if(c > max) {
        max = c;
      }
      c = 0;
    }
  }
  if(c > max) {
    max = c;
  }
  return max;
}


if (require.main === module) {
  runners.maxConsecutiveOnes(maxConsecutiveOnes);
}

module.exports = maxConsecutiveOnes;
