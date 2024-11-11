export const reverseSeq = (n: number): number[] => {
  const arr: number[] = [];

  for (let i: number = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr.reverse();
};

console.log(reverseSeq(5));
