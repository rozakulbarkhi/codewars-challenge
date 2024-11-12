export function narcissistic(value: number): boolean {
  // your code here
  let sum = 0;

  const valueLength = [value].join("").split("").length;
  const arr = [value].join("").split("");

  for (let i = 0; i < valueLength; i++) {
    sum += parseInt(arr[i]) ** valueLength;
  }

  return sum === value ? true : false;
}

console.log(narcissistic(153));
