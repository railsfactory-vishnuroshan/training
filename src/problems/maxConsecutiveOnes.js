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
  let count =0;
  let max=0;
  for(let num of nums)
  {
    if (num===1)
    {
      count+=1;
      max=Math.max(count,max);
    }
    else
    {
        count=0;
    }
  }
  return max;
}

if (require.main === module) {
  runners.maxConsecutiveOnes(maxConsecutiveOnes);
}

module.exports = maxConsecutiveOnes;
