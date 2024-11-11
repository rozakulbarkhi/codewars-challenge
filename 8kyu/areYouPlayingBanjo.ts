export function areYouPlayingBanjo(name: string): string {
  const dict = "R";

  return name.toLocaleLowerCase().startsWith(dict.toLowerCase())
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Rozak"));
