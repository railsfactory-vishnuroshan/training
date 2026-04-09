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
const countMap = {};
  const threshold = Math.floor(nums.length / 2);

  for (const num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;

    if (countMap[num] > threshold) {
      return num;
    }
  }
}

if (require.main === module) {
  runners.majorityElement(majorityElement);
}

module.exports = majorityElement;
