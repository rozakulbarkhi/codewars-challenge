const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if (distanceToPump <= mpg * fuelLeft) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroFuel(50, 25, 2)); // true
console.log(zeroFuel(100, 50, 1)); // false
