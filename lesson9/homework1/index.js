/**
//  * 
//  * 
 */
// function getKeys(obj) {
// put you code here
// }

// examples
// getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel

const users = {
  name: "Denis",
  city: "Warsaw",
  englishLevel: "A1",
};
console.log(users);

let keys = Object.keys(users);
console.log(keys);

// const getKeys = users;
// const keys = Object.keys(users);
// Object.keys(users).forEach((key) => {
//   console.log(`${key}: ${users[value]}`);
// });

// function getOKey(obj, value) {
//   return Object.keys(obj).find((key) => obj[key] === value);
// }

// console.log(Object.keys(obj));

function getKey(obj) {}
