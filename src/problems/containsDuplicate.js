"use strict";

var runners = require("..");

/**
 * Return true if any value appears at least twice in the array, false otherwise.
 *
 * Example: containsDuplicate([1,2,3,1]) => true
 *
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  // Write your solution here
  let seen = new Set();
  for (let num of nums){
    if(seen.has(num)){
      return true;
    }
    seen.add(num);
  }
  return false;
}

if (require.main === module) {
  runners.containsDuplicate(containsDuplicate);
}

module.exports = containsDuplicate;
