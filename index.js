function countSheeps (sheeps) {
  let count = 0;

  for (const sheepIsPresent of sheeps) {
    if (sheepIsPresent) {
      count++;
    }
  }

  return count;
}

console.log(countSheeps([
  true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true
]));
