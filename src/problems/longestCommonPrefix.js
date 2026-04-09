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
  if(strs.length===0)
       return "";
    strs.sort();
    let left= strs[0];
    let  right=strs[strs.length-1];
    let val="";

    for( let i=0;i<left.length;i++){
      if(left.charAt(i)===right.charAt(i))
        val+=left.charAt(i);
      else{
        break;
      }

    }

 return val;
}

if (require.main === module) {
  runners.longestCommonPrefix(longestCommonPrefix);
}

module.exports = longestCommonPrefix;
