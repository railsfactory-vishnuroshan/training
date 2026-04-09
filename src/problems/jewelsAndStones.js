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
  let map = {};
  let count = 0;
  for (let jewel of jewels){
    map[jewel] = true;
  }
  for (let stone of stones){
    if(map[stone]){
      count++;
    }
}
return count;}

if (require.main === module) {
  runners.jewelsAndStones(jewelsAndStones);
}

module.exports = jewelsAndStones;
