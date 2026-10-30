import * as readline from "node:readline/promises";
 
const members: string[] = ["Alya", "Budi", "Citra", "Fikri", "Dewi"];
 
async function main(): Promise<void> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
 
  console.log("===== STUDENT NAME SEARCH =====");
  console.log();
  const target: string = await rl.question("Enter a name to search: ");
  rl.close();
 
  console.log();
  console.log(`Searching for: ${target}`);
  console.log();
 
  let foundIndex: number = -1;
  for (let i = 0; i < members.length; i++) {
    if (members[i] === target) {
      foundIndex = i;
      break;
    }
  }
 
  if (foundIndex !== -1) {
    console.log(`Result : FOUND at index ${foundIndex}`);
  } else {
    console.log("Result : NOT FOUND");
  }
}
 
main();