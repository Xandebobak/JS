// vehicle and ship

const vehicle = {
  move() {
    console.log(`${this.name} moving`);
  },
  stop() {
    console.log(`${this.name} stoped`);
  },
};

//vehicle.move();

//console.log(vehicle);

const ship = {
  name: "Aurora",
  hasWheels: false,
  liftAnchorDown() {
    console.log("Lifting anchor dawn");
  },
  liftAnchorDown() {
    console.log("Lifting anchor up");
  },
};

Object.setPrototypeOf(ship, vehicle);

// console.log(ship);

ship.move();
