const checkSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (!Array.isArray(arr)) {
    return null;
  }
  if (sum > 100) {
    return true;
  }
  if (sum < 100) {
    return false;
  }
};

// if (!Array.isArray(arr)) {
//   return null;
// }

// arr.reduce(function (a, b) {
//   return a + b;
// });
