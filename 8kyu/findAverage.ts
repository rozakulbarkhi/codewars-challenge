export function findAverage(array: number[]): number {
  // your code here
  if (!array.length) return 0;

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(findAverage([1, 1, 1]));
