// const user = {
//     name: 'Tom',
//     age: 17,
//   };

/* присвой объекту свойство hobby со значением 'football' с помощью точки */

// const anotherKey = 'married';
/* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */

/* присвой объекту свойство 'favorite music' со значением 'rock' */

/* присвой объекту свойство 'address', которое будет пустым объкетом */

/* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */

/* присвой объекту в 'address' свойство 'building', со значением 17 */

/* выведи в консоль итоговый объект user */

const user = {
  name: "Tom",
  age: 17,
};
const anotherKey = "married";

user.hobby = "football";
user.married = false;
user["favorite music"] = "rock";
user.address = {
  country: "Ukraine",
  building: 17,
};

console.log(user);
