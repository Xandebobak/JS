function countOccurrences(str, substr) {
  if (!str) {
    str = "";
  }
  if (!substr) {
    return 0;
  }
  return (str.match(new RegExp(substr, "g")) || []).length;
}
// console.log(countOccurrences("hello world", "l"));
