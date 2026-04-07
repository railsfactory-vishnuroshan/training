"use strict";

var longestCommonPrefixCases = [
  { input: [["flower", "flow", "flight"]], expected: "fl" },
  { input: [["dog", "racecar", "car"]], expected: "" },
  {
    input: [["interspecies", "interstellar", "interstate"]],
    expected: "inters",
  },
  { input: [["a"]], expected: "a" },
];

module.exports = longestCommonPrefixCases;
