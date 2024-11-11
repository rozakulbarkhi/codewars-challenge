export function lovefunc(flower1: number, flower2: number): boolean {
  // Do we love each other?
  if (
    (flower1 % 2 === 1 && flower2 % 2 === 0) ||
    (flower1 % 2 === 0 && flower2 % 2 === 1)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(lovefunc(1, 4));
