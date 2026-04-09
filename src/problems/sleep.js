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
const pause =(ms)=>new Promise(resolve=>setTimeout(resolve,ms));
async function sleep(millis) {
   await pause(millis);
}

if (require.main === module) {
  runners.sleep(sleep);
}

module.exports = sleep;
