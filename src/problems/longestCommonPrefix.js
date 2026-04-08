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
  strs.sort();
  let x = strs[0];
  let y = strs[strs.length-1];
  let res = "";
  for(let i=0;i<Math.min(x.length,y.length);i++){
    if(x[i] !== y[i]){
      return res;
    }
    res+=x[i];
  }
  return res;
}

if (require.main === module) {
  runners.longestCommonPrefix(longestCommonPrefix);
}

module.exports = longestCommonPrefix;
