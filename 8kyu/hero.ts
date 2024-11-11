export function hero(bullets: number, dragons: number): boolean {
  return bullets / dragons >= 2 ? true : false;
}

console.log(hero(10, 5));
