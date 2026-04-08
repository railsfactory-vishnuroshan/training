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
  let res = {};
  function identify(curr, prefix)
  {
    for(let key in curr)
    {
      let value = curr[key];
      let newKey = prefix ? prefix+"."+key:key
       if( typeof value === "object" && value!== null && !Array.isArray(value))
       {
          identify(value, newKey);
       }
       else
       {
        res[newKey]=value;
       }
    }
  }
  identify(obj, "");
  return res;
}

if (require.main === module) {
  runners.flattenObject(flattenObject);
}

module.exports = flattenObject;
