const scores: number[] = [78, 92, 85, 67, 90];
let highest: number = scores[0];
 
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > highest) {
    highest = scores[i];
  }
}
 
console.log("===== HIGHEST SCORE FINDER =====");
console.log();
console.log(`Scores : ${scores.join(", ")}`);
console.log();
console.log(`Highest Score : ${highest}`);