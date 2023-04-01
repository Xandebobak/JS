/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

//const getAdults = obj => {
// put your code here
//};

// examples
//getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
//getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }

// const users = {
//   "John Doe": 19,
//   Tom: 17,
//   Bob: 18,
// };

// const getAdults = obj => {
//   for (let key in obj) {
//       if (obj[key] < 18) {
//           delete(obj[key]);
//       }
//   }

//   return obj;
// };

const getAdults = (obj) => {
  let filteredObj = {};

  for (let key in obj) {
    if (obj[key] >= 18) {
      filteredObj[key] = obj[key];
    }
  }

  return filteredObj;
};

console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }));
