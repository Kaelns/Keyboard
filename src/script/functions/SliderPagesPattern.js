import { shuffleArr } from "./Shuffle";

export function generateArrOfSliderPagesPattern(numOfCards, arr48El) {
  if (!(numOfCards > 1)) {
    return arr48El;
  }

  let res = [];
  for (let i = 0; i < 48 / numOfCards; i++) {
    res.push(
      shuffleArr(arr48El.slice(i * numOfCards, i * numOfCards + numOfCards))
    );
  }

  return res;
}
