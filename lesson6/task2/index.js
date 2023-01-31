const numbers = [11, 22, 33, 55, 66];

function sum(numbers) {
  let sumOfNumbers = 0;

  for (let i = 0; i < numbers.lenght; i++) {
    console.log(numbers[i]);
    sumOfNumbers += numbers[i];
  }

  return sumOfNumbers;
}
const sumOfElements = sum(numbers);

console.log("Result: " + sumOfElements);
