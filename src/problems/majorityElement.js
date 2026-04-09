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
    let map={};
    for(let num of nums)
    {
        map[num]=(map[num] || 0)+1;
        if(map[num] > nums.length/2) return num;
    }
};

if (require.main === module) {
  runners.majorityElement(majorityElement);
}

module.exports = majorityElement;
