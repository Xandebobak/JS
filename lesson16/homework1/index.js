function createArrayOfFunctions(n) {
  if (typeof n !== "number") {
    return null;
  }
  if (!n) {
    return [];
  }
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(() => i);
  }
  return arr;
}

// console.log(createArrayOfFunctions(9)[5]());
