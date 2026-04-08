"use strict";
 
var runners = require("..");
 
/**
* Given an array containing n distinct numbers in range [0, n], find the missing one.
*
* Example: missingNumber([3,0,1]) => 2
*
* @param {number[]} nums
* @return {number}
*/
function missingNumber(nums) {
    let n=nums.length;
    let total=(n*(n+1))/2;
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return total-sum;
  // Write your solution here
}
 
if (require.main === module) {
  runners.missingNumber(missingNumber);
}
 
module.exports = missingNumber;