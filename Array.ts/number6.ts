const scores: number[] = [80, 65, 90, 72, 88, 55, 95];
const PASSING_SCORE: number = 75;
let passed: number = 0;
 
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= PASSING_SCORE) {
    passed++;
  }
}
 
console.log("===== PASSING GRADE COUNTER =====");
console.log();
console.log(`Scores : ${scores.join(", ")}`);
console.log();
console.log(`Students Passed : ${passed} out of ${scores.length}`);