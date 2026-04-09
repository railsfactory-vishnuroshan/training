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

  let result={};
  function help(currentobj,parentkey){
    for(let key in currentobj){
      let newkey=parentkey?parentkey+"."+key:key; 

      if(typeof currentobj[key]==="object" && currentobj[key]!==null && !Array.isArray(currentobj[key])){
        help(currentobj[key],newkey);
      } else {
        result[newkey]=currentobj[key];
      }
    }
  }
  help(obj,"");
  return result;
}

if (require.main === module) {
  runners.flattenObject(flattenObject);
}

module.exports = flattenObject;
