//const m = 0;
//const n = 1000;

for (let m = 0; m <= 1000; m++) {
  if (m % 2 === 1) {
    console.log("Found");
  }
}
let sum = 0;
for (let i = 0; i < 1000; i++) {
  sum = sum + i;
  if (sum * 5 > 5000) {
    console.log("Bigger");
  }
  if (sum * 5 < 5000) {
    console.log("Smaller or equal");
  }
}
//console.log(sum);
