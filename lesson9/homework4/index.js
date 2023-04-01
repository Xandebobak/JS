const getPeople = (obj) => {
  const residents = Object.values(obj).flat();

  const names = residents.map((resident) => resident.name);

  return names;
};

const rooms = {
  room1: [
    { name: "Jack", floor: 1 },
    { name: "Andrey", floor: 1 },
    { name: "Ann", floor: 1 },
    { name: "Vasyl", floor: 3 },
  ],
  room2: [{ name: "Dan", floor: 3 }],
  room3: [
    { name: "Denis", floor: 1 },
    { name: "Max", floor: 3 },
    { name: "Alex", floor: 1 },
  ],
};

const people = getPeople(rooms);
console.log(people);
