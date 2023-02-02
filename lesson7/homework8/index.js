function arrAvarage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length;
}
