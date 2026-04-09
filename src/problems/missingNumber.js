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
function missingNumber(nums){
  // Write your solution here
  let set=new Set(nums);
  for (let i=0;i<=nums.length;i++){
    if(!set.has(i)){
      return i;
    }
}
}

if (require.main === module) {
  runners.missingNumber(missingNumber);
}

module.exports = missingNumber;
