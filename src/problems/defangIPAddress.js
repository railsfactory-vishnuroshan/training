"use strict";

var runners = require("..");

/**
 * Given a valid IPv4 address, return a defanged version with every "." replaced by "[.]".
 *
 * Example: defangIPAddress("1.1.1.1") => "1[.]1[.]1[.]1"
 *
 * @param {string} address
 * @return {string}
 */
function defangIPAddress(address) {
  // Write your solution here
  let result = "";
  for (let char of address) {
    if (char === ".") {
      result += "[.]";
    } else {
      result += char;
    }
  }
  return result;
}

if (require.main === module) {
  runners.defangIPAddress(defangIPAddress);
}

module.exports = defangIPAddress;
