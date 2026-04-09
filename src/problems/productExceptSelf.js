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
function productExceptSelf(nums){
  // Write your solution here
  let result=[];
  for (let i=0;i<nums.length;i++){
    let product=1;
    for (let j=0;j<nums.length;j++){
      if (i!==j){
        product *=nums[j];
      }
    }
    result.push(product);
  }
  return result;
}
if (require.main === module) {
  runners.productExceptSelf(productExceptSelf);
}

module.exports = productExceptSelf;
