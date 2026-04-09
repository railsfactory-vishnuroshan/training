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
  let left= new Array(nums.length), right = new Array(nums.length);
  let arr=[];
  left[0] = 1;
  right[nums.length-1] = 1;
  for(let i=0;i<nums.length-1;i++)
  {
    left[i+1]= left[i]*nums[i];
    right[nums.length-2-i] = nums[nums.length-1-i]*right[nums.length-1-i];
  }
  for(let ind in nums)
  {
    arr[ind] = left[ind]*right[ind];
  }
  return arr;
}

if (require.main === module) {
  runners.productExceptSelf(productExceptSelf);
}

module.exports = productExceptSelf;
