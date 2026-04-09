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
  if(strs.length === 0 ){
    return "";
  }
  for(let i=0;i<strs[0].length;i++){
    let char = strs[0][i];
  
  for(let j=1;j<strs.length;j++){
    if(i >= strs[j].length || strs[j][i] !== char){
      return strs[0].slice(0,i);
    }
  }
}
return strs[0];

}

if (require.main === module) {
  runners.longestCommonPrefix(longestCommonPrefix);
}

module.exports = longestCommonPrefix;
