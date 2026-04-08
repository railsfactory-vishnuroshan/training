"use strict";

var runners = require("..");

/**
 * Return a Promise that resolves after the given number of milliseconds.
 *
 * Example: await sleep(100) // pauses execution for 100ms
 *
 * @param {number} millis
 * @return {Promise<void>}
 */
async function sleep(millis) {
  // Write your solution here
  const delay=(ms)=>new Promise(resolve=>setTimeout(resolve,ms));
  await delay(millis);
}

if (require.main === module) {
  runners.sleep(sleep);
}

module.exports = sleep;
