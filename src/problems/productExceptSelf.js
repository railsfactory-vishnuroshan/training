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
      let n=nums.length;
      let ans=new Array(n);
      ans[0]=1;
      for(let i=1;i<n;i++){
        ans[i]=ans[i-1]*nums[i-1];
      }
      let suff=1;
      for(let i=n-1;i>=0;i--){
        ans[i]*=suff;
        suff*=nums[i];
      }
return ans;
  // Write your solution here
}
 
if (require.main === module) {
  runners.productExceptSelf(productExceptSelf);
}
 
module.exports = productExceptSelf;