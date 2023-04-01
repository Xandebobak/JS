// var a = 17;

// if (a) {
//   var a = 1;
//   console.log(a);
// }
// console.log(a);

// let a = 17;

// if (a) {
//   let a = 1;
//   console.log(a);
// }

// console.log(a);

var greeting = "Hello";

function seyHi() {
  greeting = "Hi";
  console.log(greeting);

  if (false) {
    var greeting;
  }
}

seyHi();
console.log(greeting);
