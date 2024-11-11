export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  let sum = 0;

  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }

  return yourPoints > sum / classPoints.length ? true : false;
}

console.log(betterThanAverage([2, 3], 5));
