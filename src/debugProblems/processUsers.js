/**
 * Press F5 to debug in vscode.
 */

const userIds = [101, 102, 103];

async function processUsers() {
  //   userIds.forEach(async (id) => {
  for (let id of userIds) {
    // Simulating a 1 second API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Processed user:", id);
    //   });
  }

  console.log("All users processed!");
}

processUsers(); // Expected: outputs each line after 1 second delay. it should take 3 seconds to print all lines.
