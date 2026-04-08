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
   const result = {};

  function helper(curr, prefix) {
  for (let key in curr) {
      const value = curr[key];
      const newKey = prefix ? prefix + "." + key : key;

       if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        helper(value, newKey); 
       } 
       else {
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
