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
  let current = 0;
  let max = 0;

  for(let num of nums)
  {
    if(num == 1)
    {
      current++;
      max = Math.max(current,max);
    }
    else
    {
      current=0;
    }
  }
  return max;
}

if (require.main === module) {
  runners.maxConsecutiveOnes(maxConsecutiveOnes);
}

module.exports = maxConsecutiveOnes;
