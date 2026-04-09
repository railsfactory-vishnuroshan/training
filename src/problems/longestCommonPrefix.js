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
 if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;

   
    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix[j] === strs[i][j]
    ) {
      j++;
    }

    prefix = prefix.substring(0, j);

    if (prefix === "") return "";
  }

  return prefix;

}
  // Write your solution here


if (require.main === module) {
  runners.longestCommonPrefix(longestCommonPrefix);
}

module.exports = longestCommonPrefix;
