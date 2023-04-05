function countOccurrences(str, substr) {
  if (!str) {
    str = "";
  }
  if (!substr) {
    return 0;
  }
  return (str.match(new RegExp(substr, "g")) || []).length;
}

// function countOccurrences(str, subStr) {
//   if (subStr === "") {
//     return null;
//   }

//   const regex = new RegExp(subStr, "g");
//   const matches = (str || "").match(regex) || [];

//   return matches.length;
// }

console.log(countOccurrences("hello world", "l"));
