export function createCalculator() {
  let memo = 0;

  return {
    add: function (num) {
      memo += num;
    },
    decrease: function (num) {
      memo -= num;
    },
    reset: function () {
      memo = 0;
    },
    getMemo: function () {
      return memo;
    },
  };
}
