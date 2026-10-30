const temps: number[] = [29, 31, 28, 30, 32, 27, 29];
let total: number = 0;
 
console.log("===== WEEKLY TEMPERATURE LOG =====");
console.log();
 
for (let i = 0; i < temps.length; i++) {
  console.log(`Day ${i + 1} : ${temps[i]} C`);
  total += temps[i];
}
 
const average: number = total / temps.length;
 
console.log();
console.log(`Total Temperature   : ${total} C`);
console.log(`Average Temperature : ${average.toFixed(2)} C`);