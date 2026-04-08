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
  nums.sort();
  // Write your solution here
  if(nums.length === 1)
  {
    return 1;
  }
  let i=1, j=nums.length-1;
  while(i<=j)
  {
     if(nums[i]===nums[i-1] || nums[i]<nums[i-1])
     {
       let temp = nums[j];
       nums[j]=nums[i];
       nums[i]=temp;
       j--;
     }
     i++;
  }
  return j+1;

}


if (require.main === module) {
  runners.removeDuplicates(removeDuplicates);
}

module.exports = removeDuplicates;
