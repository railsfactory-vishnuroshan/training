"use strict";

var runners = require("..");

/**
 * Implement Array.prototype.filter without using the built-in .filter() method.
 *
 * Example: customFilter([1, 2, 3, 4], num => num % 2 === 0) => [2, 4]
 *
 * @param {any[]} arr
 * @param {Function} fn
 * @return {any[]}
 */
function customFilter(arr, fn) {
  // Write your solution here
  let Result=[];
  for (let i =0; i<arr.length;i++){
    if (fn(arr[i],i,arr)){
      Result.push(arr[i]);
    }
  }
  return Result;
}

if (require.main === module){
  runners.customFilter(customFilter);
}

module.exports = customFilter;
