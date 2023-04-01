function splitString(str, len = 10) {
  if (typeof str !== "string") return null;
  const result = [];
  let substr = "";
  for (let i = 0; i < str.length; i++) {
    substr += str[i];
    if ((i + 1) % len === 0) {
      result.push(substr);
      substr = "";
    }
  }
  if (substr.length > 0) {
    while (substr.length < len) {
      substr += "•";
    }
    result.push(substr);
  }
  return result;
}
console.log(splitString("abed efgh", 4));
