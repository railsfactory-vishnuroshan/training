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
  let max = 0;
  let cur =0;

  for(let i=0;i<nums.length; i++){
    if(nums[i] === 1){
      cur++;
      max = Math.max(cur,max);
    }
    else{
      cur =0;
    }
  }
  return max;

}

if (require.main === module) {
  runners.maxConsecutiveOnes(maxConsecutiveOnes);
}

module.exports = maxConsecutiveOnes;
