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
  let element = null;
  let count = 0;
  for (let num of nums) {
    if (count === 0) {
      element = num;
    }

    if (num === element) {
      count++;
    } else {
      count--;
    }
  }
  return element;
}

if (require.main === module) {
  runners.majorityElement(majorityElement);
}

module.exports = majorityElement;
