const names: string[] = ["Notebook", "Pen", "Eraser", "Ruler", "Pencil"];
const prices: number[] = [8000, 3000, 2500, 5000, 2000];
 
const rp = (n: number): string => "Rp" + n.toLocaleString("en-US");
 
console.log("===== CHEAPEST ITEM FINDER =====");
console.log();
 
let minIndex: number = 0;
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i].padEnd(8)} : ${rp(prices[i])}`);
  if (prices[i] < prices[minIndex]) {
    minIndex = i;
  }
}
 
console.log();
console.log(`Cheapest Item : ${names[minIndex]} (${rp(prices[minIndex])})`);