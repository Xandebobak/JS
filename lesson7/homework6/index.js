const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  arr.reduce(function (a, b) {
    return a + b;
  });
};
