"use strict";

var runners = require("..");

/**
 * Remove duplicates from a sorted array in-place and return the new length.
 * Modify the array with O(1) extra memory.
 *
 * Example: removeDuplicates([1,1,2]) => 2, array becomes [1,2,...]
 *
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  // Write your solution here
  if(nums.length===0){
    return 0;
  }
  let i=0;
  for (let j=1; j<nums.length;j++){
    if(nums[j] !==nums[i]){
      i++;
      nums[i]=nums[j];
    }
  }
  return i+1;

}

if (require.main === module) {
  runners.removeDuplicates(removeDuplicates);
}

module.exports = removeDuplicates;
