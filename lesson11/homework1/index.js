// function splitString(str, len = 10) {
//   if (typeof str !== "string") return null;
//   const result = [];
//   let substr = "";
//   for (let i = 0; i < str.length; i++) {
//     substr += str[i];
//     if ((i + 1) % len === 0) {
//       result.push(substr);
//       substr = "";
//     }
//   }
//   if (substr.length > 0) {
//     while (substr.length < len) {
//       substr += "•";
//     }
//     result.push(substr);
//   }
//   return result;
// }
// console.log(splitString("abed efgh", 4));

// function splitString(str, len = 10) {
//   if (typeof str !== "string") return null;
//   const chunks = str.match(new RegExp(`.{1,${len}}`, "g")) || [];
//   const lastChunk = chunks.pop() || "";
//   const paddedLastChunk = lastChunk.padEnd(len, "•");
//   return [...chunks, paddedLastChunk];
// }

// console.log(splitString("abed efgh", 4));

// function splitString(str, len = 10) {
//   return typeof str === "string"
//     ? str.match(new RegExp(`.{1,${len}}`, "g")).map((substr) => {
//         return substr.padEnd(len, "•");
//       })
//     : null;
// }

// function splitString(str, len = 10) {
//   if (typeof str !== "string") {
//     return null;
//   }

//   const regex = new RegExp(`.{1,${len}}`, "g");
//   const substrings = str.match(regex) || [];

//   if (
//     substrings.length === 0 ||
//     substrings[substrings.length - 1].length === len
//   ) {
//     return substrings;
//   }

//   const lastSubstr = substrings.pop();
//   const lastSubstrLen = lastSubstr.length;
//   const padding = len - lastSubstrLen;

//   return [...substrings, `${lastSubstr}${".".repeat(padding)}`];
// }

function splitString(str, len = 10) {
  if (typeof str !== "string") return null;

  const regex = new RegExp(`.{1,${len}}`, "g");
  const substrings = str.match(regex) || [];

  const lastSubstr = substrings.pop() || "";

  return [...substrings, lastSubstr.padEnd(len, ".")];
}

console.log(splitString("abed efgh", 4));
console.log(splitString("abcdefg"));
console.log(splitString(123));
console.log(splitString("qwertyuiopasdfghjklzxcvbnm"));
