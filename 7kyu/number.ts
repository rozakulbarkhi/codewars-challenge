export function number(array: string[]): string[] {
  const newArr: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(`${i + 1}: ${array[i]}`);
  }

  return newArr;
}

console.log(number(["a", "b", "c"]));
