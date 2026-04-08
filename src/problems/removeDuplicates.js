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
  if (nums.length==0){
    return 0;
  }
  // Write your solution here
  
  let j=0;
  for(let i=1;i<nums.length;i++){
    if(nums[i]!==nums[j]){
      j++;
      nums[j]=nums[i];
    }
  }
  return j+1;
}
 
if (require.main === module) {
  runners.removeDuplicates(removeDuplicates);
}
 
module.exports = removeDuplicates;
 

 