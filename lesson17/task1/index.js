//const user = {
//name: "Doe",
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     console.log(this.name);
// console.log(`${this.firstName} ${this.lastName}`);},
//},
//};

// user.walk = function walk() {
//   console.log("I'm walking");
// };

// user.seyHi = function () {
//   console.log(`Hi, I am ${this.name}.`);
// };

// user.getFullName();

//const func = user.getFullName; //.bind({ name: 'Tom' });

// .bind();

// func.call({ name: 'Tom' });

const user = {
  name: "Doe",
  seyHi(age, message) {
    console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
  },
};

//const func = user.seyHi(17, "Hello");

//func(17, "Hello");

//func.apply({ name: "Tom" });

const func = user.seyHi;

const anotherUther = {
  name: "Tom",
};

//func.apply(anotherUther, [17, 'Hello']);
func.call(anotherUther, 17, "Hello");
