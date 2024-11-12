export function filter_list(l: Array<any>): Array<number> {
  // Return a new array with the strings filtered out
  const newArr: number[] = [];

  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      newArr.push(l[i]);
    }
  }

  return newArr;
}

console.log(filter_list([1, 2, "a", "b"]));
