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
   const res = {};
  const stack = [{ current: obj, prefix: "" }];
  while (stack.length > 0) {
    const { current, prefix } = stack.pop();
    for (const [key, value] of Object.entries(current)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (value && typeof value === "object" && !Array.isArray(value)) {
        stack.push({ current: value, prefix: newKey });
      } else {
        res[newKey] = value;
      }
    }
  }
return res;
 
  // Write your solution here
}
 
if (require.main === module) {
  runners.flattenObject(flattenObject);
}
 
module.exports = flattenObject;