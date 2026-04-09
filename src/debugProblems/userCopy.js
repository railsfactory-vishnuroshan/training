/**
 * Press F5 to debug in vscode.
 */

const originalUsers = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

function addNewUser(usersList, newUser){
  const copiedList = [...usersList];
  copiedList.push(newUser);
  return copiedList;
}

const updatedUsers = addNewUser(originalUsers, { id: 3, name: "Bob" });

console.log("Original List Length:", originalUsers.length); // Expected output is 2
