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
   let str1=strs[0];
   let strs2=strs[strs.length-1];
   let ans="";
   for(let i=0;i<str1.length;i++){
    if(str1[i]===strs2[i]){
      ans= ans+str1[i];
 
    }
    else{
      break;
    }
   }
   return ans;
  // Write your solution here
}
 
if (require.main === module) {
  runners.longestCommonPrefix(longestCommonPrefix);
}
 
module.exports = longestCommonPrefix;