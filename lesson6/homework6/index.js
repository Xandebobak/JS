function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(function (i) {
    return i;
  });
}
