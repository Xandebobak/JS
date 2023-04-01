// vehicle and ship

const vehicle = {
  move() {
    console.log("moving");
  },
  stop() {
    console.log("stoped");
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
  __proto__: vehicle,
};

//console.log(ship);
