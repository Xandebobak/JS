function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(function (x) {
    return Math.pow(x, 2);
  });
}
