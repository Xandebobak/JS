function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  if (+max > 1000) {
    return true;
  }
  if (min + max < 1000) {
    return false;
  }
}

// const min = arr => arr.reduce((x, y) => Math.min(x, y));
// const max = arr => arr.reduce((x, y) => Math.max(x, y));

// return Math.max.apply(null, arr);
//   return Math.min.apply(null, arr);

//const arrNumbers = [12, 55, 34, 89, 49, 128, 27];
// function checker(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let min = checker[0];
//   let max = checker[0];

//   for (let i = 0; i < checker.length; i++) {
//     if (checker[i] < min) {
//       min = checker[i];
//     }
//     if (checker[i] > max) {
//       max = checker[i];
//     }
//     return min + max;
// if ( + max > 1000) {
//   return true;
// }
// if (min + max < 1000) {
//   return false;
// }
// }
//}

// console.log(Mach.max(...arrNumbers));
// console.log(Mach.min(...arrNumbers));

// function checker(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//}
//

// Math.min

// Math.max
