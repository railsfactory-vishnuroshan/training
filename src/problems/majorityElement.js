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
  var max = 0, v = 0;
  let arr = new Array(nums.length+1).fill(0);
  let count = nums.length/2;
  for(var i = 0; i < nums.length; i++) {
    v = nums[i];
    arr[v]++;
  }
  if(arr[v] > count) {
    return v;
  }

}

if (require.main === module) {
  runners.majorityElement(majorityElement);
}

module.exports = majorityElement;
