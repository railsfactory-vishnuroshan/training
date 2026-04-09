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
  let map = new Map();
  let res = 0, max=0;
  for(let ind in nums)
  {
    if(map.has(nums[ind]))
    {
      let value = map.get(nums[ind])
      map.set(nums[ind],value+1);
    }
    else
    {
      map.set(nums[ind],1);
    }
  }
  for(let [key, value] of map)
  {
      if( value > nums.length/2)
      {
        max=(max,nums.length/2);
        res = key;
      }
  }
  return res;
}

if (require.main === module) {
  runners.majorityElement(majorityElement);
}

module.exports = majorityElement;
