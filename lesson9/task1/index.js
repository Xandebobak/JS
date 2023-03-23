// getAdults

// const user = {
//   name: "Tom",
//   key: 17,
// };

// Object.keys();
// Object.values();
// Object.entries();

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const users = {
//   Tom: 17,
//   "Jon Doe": 19,
//   Bob: 18,
// };

// const getAdults = (usersObj) => {
//   // {Tom: 17, "Jon Doe": 19, } => [ ['Tom', 17], ['Jon Doe', 19] ]

//   const usersAarray = Object.entries(usersObj);
//   // [ ['Tom', 17], ['Jon Doe', 19] ] => [ ['Jon Doe', 19] ]

//   const filterredUsersArreay = usersAarray.filter((users) => users[1] >= 18);
//   // [ ['Jon Doe', 19] ] => ['Jon Doe']

//   const usersNames = filterredUsersArreay.map((users) => users[0]);

//   return usersNames;
// };

// console.log(getAdults(users));

const user = {
  name: "Tom",
  key: 17,
};

const concatProps = (obj) => Object.values();

console.log(concatProps(user));
