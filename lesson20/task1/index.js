class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static compare(user1, user2) {
    return user1.age - user2.age;
  }

  seyHi() {
    console.log(`Hi I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }
}

const user1 = new User("Tom", 17);
const user2 = new User("Tom", 34);

console.log(User.compare(user1, user2));
