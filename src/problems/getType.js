"use strict";

var runners = require("..");

/**
 * Return the exact type of a value as a lowercase string.
 * Must correctly distinguish "array", "null", "object", and standard primitives.
 *
 * Example: getType([]) => "array"
 *
 * @param {any} value
 * @return {string}
 */
function getType(value) {
  // Write your solution here
  if(Array.isArray(value) )
  {
    return "array"
  }
  if(value === null)
  {
    return "null";
  }
  return typeof(value);
}

if (require.main === module) {
  runners.getType(getType);
}

module.exports = getType;
