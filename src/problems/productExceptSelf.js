"use strict";

var runners = require("..");

/**
 * Return an array where each element is the product of all other elements.
 * Must run in O(n) time without using the division operation.
 *
 * Example: productExceptSelf([1,2,3,4]) => [24,12,8,6]
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  // Write your solution here
  const answer = new Array(nums.length).fill(1);
  let leftProd = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = leftProd;
    leftProd *= nums[i];
  }
  let rightProd = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= rightProd;
    rightProd *= nums[i];
  }
  return answer;
}

if (require.main === module) {
  runners.productExceptSelf(productExceptSelf);
}

module.exports = productExceptSelf;
