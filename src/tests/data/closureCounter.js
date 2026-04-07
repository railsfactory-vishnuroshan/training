"use strict";

var closureCounterCases = [
  { input: [5, ["increment", "decrement", "reset"]], expected: [6, 5, 5] },
  { input: [0, ["increment", "increment", "increment"]], expected: [1, 2, 3] },
  { input: [10, ["decrement", "reset"]], expected: [9, 10] },
];

module.exports = closureCounterCases;
