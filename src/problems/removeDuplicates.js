"use strict";

var runners = require("..");

/**
 * Remove duplicates from a sorted array in-place and return the new length.
 * Modify the array with O(1) extra memory.
 *
 * Example: removeDuplicates([1,1,2]) => 2, array becomes [1,2,...]
 *
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let writeInd = 1;
  for (let readInd = 1; readInd < nums.length; readInd++) {
    if (nums[readInd] !== nums[readInd - 1]) {
      nums[writeInd] = nums[readInd];
      writeInd++;
    }
  }
  return writeInd;
}

if (require.main === module) {
  runners.removeDuplicates(removeDuplicates);
}

module.exports = removeDuplicates;
