function sumMix(x) {
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }

  return sum;
}

sumMix([9, 3, "7", "3"]);
