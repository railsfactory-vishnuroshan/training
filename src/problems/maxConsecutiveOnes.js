"use strict";

var runners = require("..");

/**
 * Find the maximum number of consecutive 1s in a binary array.
 *
 * Example: maxConsecutiveOnes([1,1,0,1,1,1]) => 3
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxConsecutiveOnes(nums) {
  let mx = 0;
  let curr = 0;
  for (let num of nums) {
    if (num === 1) {
      curr++;
      mx = Math.max(mx, curr);
    } else {
      curr = 0;
    }
  }
  return mx;
}

if (require.main === module) {
  runners.maxConsecutiveOnes(maxConsecutiveOnes);
}

module.exports = maxConsecutiveOnes;
