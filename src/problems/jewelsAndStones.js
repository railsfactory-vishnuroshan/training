"use strict";
 
var runners = require("..");
 
/**
* Return how many of the stones are also jewels.
* Letters are case-sensitive.
*
* Example: jewelsAndStones("aA", "aAAbbbb") => 3
*
* @param {string} jewels
* @param {string} stones
* @return {number}
*/
function jewelsAndStones(jewels, stones) {
  const jewelSet= new Set(jewels);
  let count=0;
  for(const stone of stones){
    if(jewelSet.has(stone)){
      count++;
    }
  }
  return count;
  // Write your solution here
}
 
if (require.main === module) {
  runners.jewelsAndStones(jewelsAndStones);
}
 
module.exports = jewelsAndStones;