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
   for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i]+nums[j]==target){
        return [i,j];
      }
    }
   }
  // Write your solution here
}
 
if (require.main === module) {
  runners.twoSum(twoSum);
}
 
module.exports = twoSum;