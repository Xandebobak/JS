/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

//const pickProps = (obj, props) => {
// put your code here
//};

// examples
//pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
// pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }

const pickProps = (obj, props) => {
  let resultObj = {};

  for (let i = 0; i < props.length; i++) {
    const key = props[i];
    if (key in obj) {
      resultObj[key] = obj[key];
    }
  }

  return resultObj;
};

console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"]));
console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c", "d", "hex"]));
