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
      let res={};
      function helper(curr,pKey)
      {
        for(let key in curr)
        {
          let newKey=pKey?pKey+"."+key:key;
          if(
            typeof curr[key] === "object" &&
            curr[key]!==null &&
            !Array.isArray(curr[key])
          )
          {
             helper(curr[key],newKey);
          }
          else
          {
              res[newKey] =curr[key];
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
