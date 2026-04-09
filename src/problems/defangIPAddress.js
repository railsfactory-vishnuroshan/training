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
  let str = "";
  for(let ind in address)
  {
    if(address[ind]===".")
    {
      str+="[.]";
    }
    else{
    str+=address[ind];
    }
  }
  return str;
}

if (require.main === module) {
  runners.defangIPAddress(defangIPAddress);
}

module.exports = defangIPAddress;
