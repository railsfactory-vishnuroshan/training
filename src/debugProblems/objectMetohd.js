/**
 * Press F5 to debug in vscode.
 */

const user = {
  name: "Alice",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

setTimeout(user.greet.bind(user), 1000); // Expected output is "Alice"
