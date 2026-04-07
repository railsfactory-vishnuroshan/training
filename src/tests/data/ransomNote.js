"use strict";

var ransomNoteCases = [
  { input: ["a", "b"], expected: false },
  { input: ["aa", "ab"], expected: false },
  { input: ["aa", "aab"], expected: true },
];

module.exports = ransomNoteCases;
