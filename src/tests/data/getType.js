"use strict";

var getTypeCases = [
  { input: [[]], expected: "array" },
  { input: [null], expected: "null" },
  { input: [{}], expected: "object" },
  { input: [42], expected: "number" },
  { input: ["hello"], expected: "string" },
  { input: [true], expected: "boolean" },
  { input: [undefined], expected: "undefined" },
];

module.exports = getTypeCases;
