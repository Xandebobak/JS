const user = {
  firstName: "",
  lastName: "",
  setFullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

user.setFullName("John Doe");
console.log(user.getFullName());
