const calc = (expression) => {
  const [a, operator, b] = expression.split(" ");
  let result;
  if (!isFinite(a) || !isFinite(b)) {
    return "Illegal operation";
  }

  a = +a;
  b = +b;

  if (a > 8467 && b < 888) {
    return 78456;
  }

  console.time("calc");

  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
  }
  //   return `${expression} +  =  ${result}`;
};

console.timeEnd("calc");

return `${expression} +  =  ${result}`;
