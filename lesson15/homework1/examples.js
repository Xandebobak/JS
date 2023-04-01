import { createCalculator } from "./index.js";
//const createCalculator = require("./index");

const calculator1 = createCalculator();
calculator1.add(5);
calculator1.decrease(2);
console.log(calculator1.getMemo()); // Output: 3

const calculator2 = createCalculator();
calculator2.add(10);
console.log(calculator2.getMemo()); // Output: 10
console.log(calculator1.getMemo()); // Output: 3
