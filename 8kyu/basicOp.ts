export function basicOp(
  operation: string,
  value1: number,
  value2: number
): number {
  // Good luck!
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

console.log(basicOp("+", 4, 7));
