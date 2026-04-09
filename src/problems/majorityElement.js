"use strict";

var runners = require("..");

/**
 * Find the majority element — the element that appears more than n/2 times.
 *
 * Example: majorityElement([3,2,3]) => 3
 *
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  // Write your solution here
  let temp=0;
  let count=0;
  for(let i=0;i<nums.length;i++){
    if(count==0){
      count++;
      temp=nums[i];
    }
    else if(temp==nums[i]){
      count++;
    }
    else{
      count--;
    }
  }
  return temp;
}

if (require.main === module) {
  runners.majorityElement(majorityElement);
}

module.exports = majorityElement;
