function sortAsc(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.sort(function (a, b) {
    return a - b;
  });
}

function sortDesc(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.sort(function (a, b) {
    return b - a;
  });
}
