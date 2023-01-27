//const people = ["Tom", "Ann", "Bob"];

//people[people.length] = "Jack";

//people.unshift("Jack", "Jon"); // add to start
//people.push("Jack", "Jon"); // add to emd
//const last = people.shift(); // deleted to start

//console.log(first);
//console.log(people);
//console.log(people.length);

// from, tom => [n% 3 === 0]

function getSpecialNumbers(from, to) {
  let specialnumbers = [];

  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      specialNumbers.push(i);
    }
  }

  return specialnumbers;
}

const specialNumbers = getSpecialNumbers(10, 30);

console.log(specialNumbers);
