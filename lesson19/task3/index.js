// User

function User(name, age) {
  this.name = name;
  this.age = age;

  User.prototype.seyHi = function () {
    console.log(`Hi I am ${this.name}`);
  };
}

const user1 = new User("Tom", 17);
const user2 = new User("Bob", 21);

console.log(user1);

user1.seyHi();
