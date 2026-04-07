"use strict";

var customFilterCases = [
  {
    input: [
      [1, 2, 3, 4],
      function (num) {
        return num % 2 === 0;
      },
    ],
    expected: [2, 4],
  },
  {
    input: [
      [10, 20, 30],
      function (x) {
        return x > 15;
      },
    ],
    expected: [20, 30],
  },
  {
    input: [
      ["a", "b", "c"],
      function (char) {
        return char === "z";
      },
    ],
    expected: [],
  },
];

module.exports = customFilterCases;
