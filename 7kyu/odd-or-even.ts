export function oddOrEven(array: number[]) {
  // enter code here
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum % 2 === 1 || sum % 2 === -1 ? "odd" : "even";
}

// console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0, 1, -4]));
