/**
 * Press F5 to debug in vscode.
 */

const numbers = [1, 3, 5, 2, 4];
let arr = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    arr.push(numbers[i]);
  }

}

console.log("Even numbers only:", arr); // Expected output is [2, 4]
