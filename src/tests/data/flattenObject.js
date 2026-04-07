"use strict";

var flattenObjectCases = [
  { input: [{ a: { b: 1 } }], expected: { "a.b": 1 } },
  { input: [{ x: 10, y: { z: 20 } }], expected: { x: 10, "y.z": 20 } },
  { input: [{ a: { b: { c: { d: 5 } } } }], expected: { "a.b.c.d": 5 } },
];

module.exports = flattenObjectCases;
