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
  function helper(cur,pref){
    for(let key in cur){
      let newkey = pref ? `${pref}.${key}`:key;
      if(
         typeof cur[key] === "object" &&
         cur[key]!== null &&
         !Array.isArray(cur[key])
        ){
          helper(cur[key],newkey);
        }
        else{
          res[newkey] = cur[key];
        }
    }

  }
  helper(obj,"");
  return res;
}

if (require.main === module) {
  runners.flattenObject(flattenObject);
}

module.exports = flattenObject;
