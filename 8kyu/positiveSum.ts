export function positiveSum(arr: number[]): number {
  if (!arr.length) return 0;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element >= 0) {
      sum += element;
    }
  }

  return sum;
}

console.log(positiveSum([1, -2, 3, 4, 5]));
