"use strict";

var runners = require("..");

/**
 * Given an array of numbers and a target sum, return the indices of the two
 * numbers that add up to the target.
 *
 * Example: twoSum([2, 7, 11, 15], 9) => [0, 1]
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Write your solution here


  for( let ind in nums)
  {
    let value = findvalue(Math.abs(target-nums[ind]), parseInt(ind), nums)
    if(parseInt(value) !== -1)
    {
      return [parseInt(ind), parseInt(value)];
    }
  }
  return [];
}

function findvalue(value, index, nums)
{
   for(let num in nums)
   {
     if(value === nums[num])
     {
       if(index !== parseInt(num))
       {
         return num;
       }
     }
   }
   return -1;
}

if (require.main === module) {
  runners.twoSum(twoSum);
}

module.exports = twoSum;
