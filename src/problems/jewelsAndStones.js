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

  const tab = {};
  let count = 0;
  for(let ch of jewels){
    tab[ch]=true;
  }
  for(let ch of stones){
    if(tab[ch]){
      count++;
    }
  }
  return count;

}

if (require.main === module) {
  runners.jewelsAndStones(jewelsAndStones);
}

module.exports = jewelsAndStones;
