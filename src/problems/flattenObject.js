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
  function help(currentobj, currentpath){
for(let key in currentobj){
  let newpath = currentpath? currentpath+'.'+key : key;
  if(typeof currentobj[key]==='object' && currentobj[key]!==null && !Array.isArray(currentobj[key])){
    help(currentobj[key],newpath);
  }else{
    result[newpath]=currentobj[key];
  }
}
  }
help(obj, '');
return result;
  }
if (require.main === module) {
  runners.flattenObject(flattenObject);
}

module.exports = flattenObject;
