/**
 * Press F5 to debug in vscode.
 */

const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter((num) => {
   return num % 2 === 0;
});

console.log(evens); // Expected output is [2,4,6]
