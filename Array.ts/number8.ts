const scores: number[] = [88, 72, 95, 60, 81];
const original: string = scores.join(", ");
 
for (let pass = 0; pass < scores.length - 1; pass++) {
  for (let j = 0; j < scores.length - 1 - pass; j++) {
    if (scores[j] > scores[j + 1]) {
      const temp: number = scores[j];   // swap neighbours
      scores[j] = scores[j + 1];
      scores[j + 1] = temp;
    }
  }
}
 
console.log("===== SCORE RANKING =====");
console.log();
console.log(`Original Scores : ${original}`);
console.log();
console.log(`Sorted Scores   : ${scores.join(", ")}`);