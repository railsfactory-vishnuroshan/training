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
  const tab = {}
  for (let num of nums){
    tab[num] = (tab[num] || 0 ) + 1;
    if(tab[num] > nums.length/2){
      return num;
    }

  }
   



}

if (require.main === module) {
  runners.majorityElement(majorityElement);
}

module.exports = majorityElement;
