function removeEveryOther(arr: string[]): string[] {
  //your code here
  let newArr: string[] = [];

  arr.forEach((item, index) => {
    if (index % 2 === 0) {
      newArr.push(item);
    }
  });

  console.log(newArr);
  return newArr;
}

removeEveryOther(["Hello", "Goodbye", "Hello Again", "halo"]);
