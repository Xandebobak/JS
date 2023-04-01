function cleanTransactionsList(transactions) {
  return transactions
    .filter((transaction) => {
      if (typeof transaction === "string") {
        transaction = transaction.trim();
        if (/^\d+(\.\d{1,2})?$/.test(transaction)) {
          return true;
        }
      } else if (typeof transaction === "number") {
        return true;
      }
      return false;
    })
    .map((transaction) => "$" + parseFloat(transaction).toFixed(2));
}
const transactions = ["1.9 ", "16.4", 17, "1 dollar '1"];
console.log(cleanTransactionsList(transactions));
