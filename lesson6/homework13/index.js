function uniqueCount(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return new Set(arr).size;
}
