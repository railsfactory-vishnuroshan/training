"use strict";

var runTests = require("./tests/engine");
var twoSumData = require("./tests/data/twoSum");
var reverseData = require("./tests/data/reverse");
var maxConsecutiveOnesData = require("./tests/data/maxConsecutiveOnes");
var missingNumberData = require("./tests/data/missingNumber");
var containsDuplicateData = require("./tests/data/containsDuplicate");
var removeDuplicatesData = require("./tests/data/removeDuplicates");
var productExceptSelfData = require("./tests/data/productExceptSelf");
var validPalindromeData = require("./tests/data/validPalindrome");
var longestCommonPrefixData = require("./tests/data/longestCommonPrefix");
var defangIPAddressData = require("./tests/data/defangIPAddress");
var firstUniqueCharData = require("./tests/data/firstUniqueChar");
var majorityElementData = require("./tests/data/majorityElement");
var validAnagramData = require("./tests/data/validAnagram");
var jewelsAndStonesData = require("./tests/data/jewelsAndStones");
var ransomNoteData = require("./tests/data/ransomNote");
var customFilterData = require("./tests/data/customFilter");
var closureCounterData = require("./tests/data/closureCounter");
var getTypeData = require("./tests/data/getType");
var sleepData = require("./tests/data/sleep");
var flattenObjectData = require("./tests/data/flattenObject");

module.exports = {
  twoSum: function (solutionFn) {
    runTests(solutionFn, twoSumData);
  },
  reverse: function (solutionFn) {
    runTests(solutionFn, reverseData);
  },
  maxConsecutiveOnes: function (solutionFn) {
    runTests(solutionFn, maxConsecutiveOnesData);
  },
  missingNumber: function (solutionFn) {
    runTests(solutionFn, missingNumberData);
  },
  containsDuplicate: function (solutionFn) {
    runTests(solutionFn, containsDuplicateData);
  },
  removeDuplicates: function (solutionFn) {
    runTests(solutionFn, removeDuplicatesData);
  },
  productExceptSelf: function (solutionFn) {
    runTests(solutionFn, productExceptSelfData);
  },
  validPalindrome: function (solutionFn) {
    runTests(solutionFn, validPalindromeData);
  },
  longestCommonPrefix: function (solutionFn) {
    runTests(solutionFn, longestCommonPrefixData);
  },
  defangIPAddress: function (solutionFn) {
    runTests(solutionFn, defangIPAddressData);
  },
  firstUniqueChar: function (solutionFn) {
    runTests(solutionFn, firstUniqueCharData);
  },
  majorityElement: function (solutionFn) {
    runTests(solutionFn, majorityElementData);
  },
  validAnagram: function (solutionFn) {
    runTests(solutionFn, validAnagramData);
  },
  jewelsAndStones: function (solutionFn) {
    runTests(solutionFn, jewelsAndStonesData);
  },
  ransomNote: function (solutionFn) {
    runTests(solutionFn, ransomNoteData);
  },
  customFilter: function (solutionFn) {
    runTests(solutionFn, customFilterData);
  },
  closureCounter: function (solutionFn) {
    runTests(function (initialValue, ops) {
      var counter = solutionFn(initialValue);
      if (!counter) return undefined;
      return ops.map(function (op) {
        return counter[op]();
      });
    }, closureCounterData);
  },
  getType: function (solutionFn) {
    runTests(solutionFn, getTypeData);
  },
  sleep: async function (solutionFn) {
    var passed = 0;
    var failed = 0;
    for (var i = 0; i < sleepData.length; i++) {
      var millis = sleepData[i].input[0];
      var t = Date.now();
      await solutionFn(millis);
      var elapsed = Date.now() - t;
      var ok = elapsed >= millis;
      if (ok) {
        console.log("Test " + (i + 1) + ": Passed");
        passed++;
      } else {
        console.log(
          "Test " +
            (i + 1) +
            ": Failed" +
            " | Input: " +
            millis +
            "ms" +
            " | Expected: >= " +
            millis +
            "ms" +
            " | Actual: " +
            elapsed +
            "ms",
        );
        failed++;
      }
    }
    console.log(
      "\nResults: " +
        passed +
        " passed, " +
        failed +
        " failed out of " +
        sleepData.length +
        " tests.",
    );
    if (failed > 0) {
      throw new Error(failed + " tests failed.");
    }
  },
  flattenObject: function (solutionFn) {
    runTests(solutionFn, flattenObjectData);
  },
};
