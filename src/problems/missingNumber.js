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
    let range=n*(n+1)/2;
    let curr=0;
    for(let num of nums)
    {
        curr+=num;
    }

return range-curr;
}

if (require.main === module) {
  runners.missingNumber(missingNumber);
}

module.exports = missingNumber;
