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
    const len=nums.length;
    const ans=new Array(len).fill(1);
    let left=1;
    for(let i=0;i<len;i++)
    {
        ans[i]=left;
        left *=nums[i];
    }
    let right=1;
    for(let j=len-1;j>=0;j--)
    {
       ans[j]*=right;
       right *=nums[j];
    }
  return ans;
}

if (require.main === module) {
  runners.productExceptSelf(productExceptSelf);
}

module.exports = productExceptSelf;
