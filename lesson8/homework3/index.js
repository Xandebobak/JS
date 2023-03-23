/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const user = {
  name: "Tom",
  key: 17,
  age: 22,
};

function getKeys(obj) {
  for (let key in user) {
    console.log(key + " - " + user[key]);
  }
  //   for (let key in getKeys) {
  //     obj.push(getKeys[key]);
  //   }
  // return obj;
}

console.log(getKeys(user));

// if (obj.hasOwnProperty(key)) {
//     console.log(`${key} : ${obj[key]}`);
//   }

// for (let key in user) {
//     console.log(key + ' - ' + user[key]);
// }
