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
    let set=new Set(jewels);
    let count=0;
    for(let char of stones)
    {
       if(set.has(char))
       {
          count++;
       }
    }
    return count;
}

if (require.main === module) {
  runners.jewelsAndStones(jewelsAndStones);
}

module.exports = jewelsAndStones;
