import { add, decrease, reset, getMemo } from "./index.js";

console.log(getMemo());

add(5);
console.log(getMemo());

decrease(3);
console.log(getMemo());

reset();
console.log(getMemo());