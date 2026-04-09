/**
 * Press F5 to debug in vscode.
 */

const numbers = [1, 3, 5, 2, 4];

for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] % 2 !== 0) {
    numbers.splice(i, 1);
    i--;
  }

}

console.log("Even numbers only:", numbers); // Expected output is [2, 4]
