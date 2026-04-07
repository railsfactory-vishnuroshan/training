"use strict";

var runTests = require("./tests/engine");
var twoSumData = require("./tests/data/twoSum");
var reverseData = require("./tests/data/reverse");

module.exports = {
  twoSum: function (solutionFn) {
    runTests(solutionFn, twoSumData);
  },
  reverse: function (solutionFn) {
    runTests(solutionFn, reverseData);
  },
};
