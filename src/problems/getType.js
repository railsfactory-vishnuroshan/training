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
  return Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase();
}

if (require.main === module) {
  runners.getType(getType);
}

module.exports = getType;
