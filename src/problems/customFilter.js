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

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const shouldInclude = fn(element, i, arr);

    if (!shouldInclude) continue; // Structural flattening

    result.push(element);
  }

  return result;

}


if (require.main === module) {
  runners.customFilter(customFilter);
}

module.exports = customFilter;
