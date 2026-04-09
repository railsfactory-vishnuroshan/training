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
    const res = new Array(nums.length);
    res[0] = 1; 
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let r = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = res[i] * r;
        r = r * nums[i];
    }

    return res;
}

if (require.main === module) {
  runners.productExceptSelf(productExceptSelf);
}

module.exports = productExceptSelf;
