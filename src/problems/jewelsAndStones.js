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
  // Write your solution here
  let arr = new Array(256).fill(0);
  let count =0;
  for(let ind in stones)
  {
    arr[stones[ind].charCodeAt(0)]++;
  }
  for(let ind in jewels)
  {
    if(arr[jewels[ind].charCodeAt(0)] !== 0)
    {
      count+=arr[jewels[ind].charCodeAt(0)];
    }
  }
  return count;
}

if (require.main === module) {
  runners.jewelsAndStones(jewelsAndStones);
}

module.exports = jewelsAndStones;
