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
function maxConsecutiveOnes(nums){
  let count = 0;
  let maxi = 0; 
  for(let i=0;i<nums.length;i++){
    if(nums[i] === 1){
      count++;
      maxi = Math.max(count,maxi)
    }
    else{
      count = 0;
    }
  }
  return maxi; 
}

if (require.main === module) {
  runners.maxConsecutiveOnes(maxConsecutiveOnes);
}

module.exports = maxConsecutiveOnes;
