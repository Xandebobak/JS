// own props

const vehicle = {
  //isMoving: fslse,
  move() {
    console.log(`${this.name} moving`);
  },
  stop() {
    console.log(`${this.name} stoped`);
  },
};

const ship = {
  name: "Aurora",
  hasWheels: false,
  liftAnchorDown() {
    console.log("Lifting anchor dawn");
  },
  liftAnchorUp() {
    console.log("Lifting anchor up");
  },
};

Object.setPrototypeOf(ship, vehicle);

// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

console.log(Object.keys(ship));
