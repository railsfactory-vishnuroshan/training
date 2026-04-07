# Project Specification: LeetCode-style JS Testing Environment

1. Project Overview
   Create a Node.js-based local environment for solving JavaScript coding challenges. The system must allow users to write code in a solution file and execute that same file to run a suite of pre-defined test cases using a Data-Driven Testing (DDT) pattern.

2. Directory Structure
   The agent must create the following structure:

Plaintext
/
├── src/
│ ├── index.js # Central Registry (Exports problem runners)
│ └── tests/
│ ├── engine.js # Core Assertion Logic
│ └── data/ # Test Case Definitions
│ ├── twoSum.js
│ └── reverse.js
├── twoSum.js # Sample Solution File
└── reverse.js # Sample Solution File 3. Implementation Details
A. The DDT Engine (src/tests/engine.js)
Requirement: Create a function that accepts a solutionFn and an array of testCases.

Iterate through test cases.

Spread test.input into the function.

Compare actual vs expected using JSON.stringify for deep equality.

Output Formatting: Print "Passed" or "Failed" with Input/Expected/Actual details. No emojis or double-dashes in strings.

B. The Test Data (src/tests/data/\*.js)
Requirement: Export an array of objects for each problem.

Example twoSum.js data: [{ input: [[2, 7, 11, 15], 9], expected: [0, 1] }].

C. The Registry (src/index.js)
Requirement: Act as the entry point for all tests.

Import the engine.

Import all files from src/tests/data/.

Export an object where keys are problem names and values are functions that invoke the engine with specific data.

D. The Solution Template (e.g., twoSum.js)
Requirement: Provide a starter file for the trainee.

Import the registry from ./src.

Define the target function.

Critical: Include the if (require.main === module) block to call the runner only when the file is executed directly.

Use module.exports for the function.

4. Instructions for the AI Agent
   Initialize: Create the folder structure as defined.

Logic: Implement the deep-equality check in the engine to handle arrays/objects correctly.

Boilerplate: Generate at least two example problems (twoSum and reverse) to demonstrate the multi-problem capability.

Formatting: Ensure all console outputs are professional, concise, and adhere to the "no emoji/no double-dash" constraint.

5. Metadata for Agent
   Environment: Node.js (CommonJS).

Dependencies: Zero (Standard library only).

Primary User: Trainees using "code Runner" extension in VS Code.
