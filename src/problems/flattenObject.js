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
function flattenObject(obj) {const result = {};

  function helper(current, prefix) {
    for (const key in current) {
      const value = current[key];
      const newKey = prefix ? prefix + "." + key : key;

      if (value !== null && typeof value === "object" && !Array.isArray(value)) {
        helper(value, newKey);
      } else {
        result[newKey] = value;
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
