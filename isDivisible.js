function isDivisible(n, x, y) {
  console.log(n % x);

  return n % x === 0 && n % y === 0 ? true : false;
}

console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
