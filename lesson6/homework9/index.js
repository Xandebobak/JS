const withdraw = (clients, balances, client, amount) => {
  console.log(clients);
  let arr = balances;
  let result = 0;
  for (i = 0; i < clients.length; i++) {
    console.log(clients[i], "test");
    if (clients[i] === client) {
      result = balances[i];
      arr[i] = result - amount;
    }
  }
  console.log(result, amount);

  if (result - amount < 0) {
    return "idi na huy";
  }
  return arr;
};

//Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Jo', 10)\
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 10)); // 77
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 10));
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10));
