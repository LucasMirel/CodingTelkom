const staff: string[] = ["Rangga", "Kirana", "Bagas", "Amel"];
const sales: number[] = [1200000, 1850000, 950000, 1600000];
 
const rp = (n: number): string => "Rp" + n.toLocaleString("en-US");
 
console.log("===== SALES LEADERBOARD =====");
console.log();
 
let maxIndex: number = 0;
let minIndex: number = 0;
 
for (let i = 0; i < staff.length; i++) {
  console.log(`${staff[i].padEnd(6)} : ${rp(sales[i])}`);
  if (sales[i] > sales[maxIndex]) maxIndex = i;
  if (sales[i] < sales[minIndex]) minIndex = i;
}
 
console.log();
console.log(`Top Performer    : ${staff[maxIndex]} (${rp(sales[maxIndex])})`);
console.log(`Lowest Performer : ${staff[minIndex]} (${rp(sales[minIndex])})`);