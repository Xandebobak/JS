function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return Array.from(new Set(arr));
}
