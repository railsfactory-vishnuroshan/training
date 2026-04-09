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
  if(strs.length === 1)
  {
    return strs[0];
  }
  let start = strs[0].split("");
  for(let i=1;i<strs.length;i++)
  {
    for(let chr in strs[i])
    {
      if(parseInt(chr)>start.length)
      {
        break;
      }
      else if(start[chr] !== strs[i][chr] )
      {
        if(parseInt(chr) === 0)
        {
          return "";
        }
        start = start.slice(0,parseInt(chr));
        break;
      }
    }
  }
  return start.join("");
}

if (require.main === module) {
  runners.longestCommonPrefix(longestCommonPrefix);
}

module.exports = longestCommonPrefix;
