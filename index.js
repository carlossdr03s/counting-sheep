function countSheeps (sheep) {
  let count = 0
  for (let sheepIndex = 0; sheepIndex < sheep.length; sheepIndex++) {
    const isSheepPresent = sheep[sheepIndex]
    if (isSheepPresent) {
      count++
    }
  }
  return count
}

console.log(countSheeps([
  true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true
]))
