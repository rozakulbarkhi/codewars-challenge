export const fakeBin = (x: string): string => {
  // your code here
  let result: string[] = [];

  for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) >= 5) {
      result.push("1");
    } else {
      result.push("0");
    }
  }

  return result.join("");
};

console.log(fakeBin("45385593107843568"));
