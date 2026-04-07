"use strict";

var runners = require("..");
var path = require("path");
var fs = require("fs");

var problemsDir = path.join(__dirname, "..", "problems");
var files = fs.readdirSync(problemsDir).filter(function (f) {
  return f.endsWith(".js");
});

(async function () {
  var failed = [];

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var name = file.replace(".js", "");
    var solutionFn = require(path.join(problemsDir, file));

    if (typeof runners[name] !== "function") {
      console.log("\n[" + name + "] SKIP — no runner registered\n");
      continue;
    }

    console.log("\n--- " + name + " ---");
    try {
      await runners[name](solutionFn);
    } catch (e) {
      failed.push(name);
    }
  }

  console.log("\n=============================");
  if (failed.length === 0) {
    console.log("All problems passed!");
  } else {
    console.log("Failed problems (" + failed.length + "/" + files.length + "):");
    failed.forEach(function (n) { console.log("  x " + n); });
    process.exit(1);
  }
})();
