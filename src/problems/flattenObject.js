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

  function helper(curr, prefix){
      for (let key in curr){
        const val = curr[key];
        const newKey = prefix ? `${prefix}.${key}` :key;

        if(typeof val === "object" && val != null && !Array.isArray(val)){
          helper(val, newKey);
        }
        else{
          result[newKey] = val;
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
