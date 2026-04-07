"use strict";

function runTests(solutionFn, testCases) {
  var passed = 0;
  var failed = 0;

  for (var i = 0; i < testCases.length; i++) {
    var test = testCases[i];
    var actual = solutionFn.apply(null, test.input);
    var isEqual = JSON.stringify(actual) === JSON.stringify(test.expected);

    if (isEqual) {
      console.log("Test " + (i + 1) + ": Passed");
      passed++;
    } else {
      console.log(
        "Test " +
          (i + 1) +
          ": Failed" +
          " | Input: " +
          JSON.stringify(test.input) +
          " | Expected: " +
          JSON.stringify(test.expected) +
          " | Actual: " +
          JSON.stringify(actual),
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
      testCases.length +
      " tests.",
  );
}

module.exports = runTests;
