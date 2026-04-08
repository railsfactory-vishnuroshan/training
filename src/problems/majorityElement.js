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
  let major = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === major) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      major = nums[i];
      count = 1;
    }
  }

  return major;
}

if (require.main === module) {
  runners.majorityElement(majorityElement);
}

module.exports = majorityElement;
