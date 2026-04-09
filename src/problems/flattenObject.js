"use strict";

var runners = require("..");

/**
 * Flatten a deeply nested object into a single-level object.
 * Keys of nested objects are joined with a dot ".".
 *
 * Example: flattenObject({ a: { b: 1 } }) => { "a.b": 1 }
 *
 * @param {Object} obj
 * @return {Object}
 */
function flattenObject(obj) {
  // Write your solution here
  const res = {}
  function helper(curr, key) {
    for(let k in curr) {
      const newKey = key ? `${key}.${k}` : k;

      if(
        typeof curr[k] === "object" && curr[k] !== null && 
        !Array.isArray(curr[k])) {
          helper(curr[k], newKey);
        }
      else {
        res[newKey] = curr[k];
      }
    }
  }
  helper(obj, "");
  return res;
}

if (require.main === module) {
  runners.flattenObject(flattenObject);
}

module.exports = flattenObject;
