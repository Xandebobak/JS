// copyObj

// const users = {
//   Tom: 17,
//   Bob: 100,
//   "Jon Doe": 19,
//   Bob: 18,
//      };

// const players = {
//   "Jon Doe": 19,
//   Bob: 18,
// };

// const res = Object.assign({}, users);

// console.log(res === users);

// res.Tom = 90;

// console.log(users);

// const copyObj = (obj) => Object.assing({}, obj);

// console.log(copyObj(players));

const user = {
  name: "Tom",
  age: 17,
  //   father: {
  //     name: Bob,
  //   },
};

// const player = { ...user };

// console.log(player);

const { name = "default", ...restProps } = user;

// console.log(restProps);

const player = {
  game: "football",
  ...restProps,
};

console.log(player);
