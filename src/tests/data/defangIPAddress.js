"use strict";

var defangIPAddressCases = [
  { input: ["1.1.1.1"], expected: "1[.]1[.]1[.]1" },
  { input: ["255.100.50.0"], expected: "255[.]100[.]50[.]0" },
  { input: ["0.0.0.0"], expected: "0[.]0[.]0[.]0" },
];

module.exports = defangIPAddressCases;
