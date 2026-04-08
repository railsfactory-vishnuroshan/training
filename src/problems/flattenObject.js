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
  const result = {};

  function helper(current, parentKey) {
    for(let key in current) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if(
        typeof current[key] === "object" &&
        current[key] !== null &&
        !Array.isArray(current[key])
      ) {
        helper(current[key], newKey);
      } else {
        result[newKey] = current[key];
      }
    }
  }

  helper(obj, "");
  return result;
}

if (require.main === module) {
  runners.flattenObject(flattenObject);
}

module.exports = flattenObject;
