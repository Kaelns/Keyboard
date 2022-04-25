import { shuffle } from "./Shuffle";

export function sliderPagesPattern(numOfCards, arr48El) {
  if (!(numOfCards > 1)) {
    return arr48El;
  }

  let res = [];
  for (let i = 0; i < 48 / numOfCards; i++) {
    res.push(
      shuffle(arr48El.slice(i * numOfCards, i * numOfCards + numOfCards))
    );
  }

  return res;
}
