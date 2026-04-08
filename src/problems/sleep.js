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
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

if (require.main === module) {
  runners.sleep(sleep);
}

module.exports = sleep;
