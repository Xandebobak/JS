let memo = 0;

export function add(num) {
  memo += num;
}

export function decrease(num) {
  memo -= num;
}

export function reset() {
  memo = 0;
}

export function getMemo() {
  return memo;
}
