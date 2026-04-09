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
  let max=null;
  let count=0;
  for(let n of nums){
     if (count===0){
      max=n;
      count=1;
     }
     else if(n==max){
      count++;

     }
     else{
      count--;
     }
  }
  return max;
}

if (require.main === module) {
  runners.majorityElement(majorityElement);
}

module.exports = majorityElement;
