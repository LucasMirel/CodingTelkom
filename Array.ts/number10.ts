const scores: number[][] = [
  [85, 90, 88],   // Student 1
  [70, 65, 72],   // Student 2
  [95, 92, 98],   // Student 3
];
 
console.log("===== EXAM SCORE MATRIX =====");
console.log();
 
for (let s = 0; s < scores.length; s++) {
  let total: number = 0;
  for (let e = 0; e < scores[s].length; e++) {
    total += scores[s][e];
  }
  const average: number = total / scores[s].length;
  console.log(
    `Student ${s + 1} : ${scores[s].join(", ")} -> Total: ${total}, Average: ${average.toFixed(2)}`
  );
}