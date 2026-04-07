"use strict";

var runners = require("..");

/**
 * Find the longest common prefix string amongst an array of strings.
 * Return "" if there is no common prefix.
 *
 * Example: longestCommonPrefix(["flower","flow","flight"]) => "fl"
 *
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  // Write your solution here
}

if (require.main === module) {
  runners.longestCommonPrefix(longestCommonPrefix);
}

module.exports = longestCommonPrefix;
