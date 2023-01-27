const getSpecialNumbers = (numbers) => 
numbers.filter((num) => num % 3 === 0);

const arr = [1, 2, 3, 4, 5, 6];

console.log(getSpecialNumbers(arr));

//for (let i = 0; i < numbers.length; i++) {
//if (numbers(i) % 3 === 0) {
// specialNumbers.push(numbers(i));
// }
//}
