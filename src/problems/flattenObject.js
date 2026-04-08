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
  function helper(currentObj, path) {
    for (let key in currentObj) {
      const value = currentObj[key];
      const newPath = path ? path + "." + key : key;

      if (value !== null && typeof value === "object") {
        helper(value, newPath);
      } else {
        result[newPath] = value;
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
