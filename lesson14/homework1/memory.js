import { add, decrease, reset, getMemo } from "./homwork1/./index.js";

console.log(getMemo()); // 0

add(5);
console.log(getMemo()); // 5

decrease(3);
console.log(getMemo()); // 2

reset();
console.log(getMemo()); // 0
