import JSON from "../../assets/pets.json";
import { generate48ElArr } from "../functions/Generate48ElArr";
import { sliderPagesPattern } from "../functions/SliderPagesPattern";
import { CreateCard } from "./CreateCards";

// const WINDOW_WIDTH = document.documentElement.clientWidth;
const PK_WINDOW_WIDTH = 1280;
const TABLE_WINDOW_WIDTH = 768;
const MOBILE_WINDOW_WIDTH = 320;

let whatThePage;
let cards = [];

export function createSlider(page) {
  whatThePage = page;

  generateArrOfCards();
  cardsOnPage();
}

function cardsOnPage() {
  let NumOfCards;
  let windowWidth = document.documentElement.clientWidth;

  if (windowWidth >= PK_WINDOW_WIDTH) {
    NumOfCards = whatThePage === "main" ? 3 : 8;
  } else if (
    TABLE_WINDOW_WIDTH <= windowWidth &&
    windowWidth < PK_WINDOW_WIDTH
  ) {
    NumOfCards = whatThePage === "main" ? 2 : 6;
  } else if (
    MOBILE_WINDOW_WIDTH <= windowWidth &&
    windowWidth < TABLE_WINDOW_WIDTH
  ) {
    NumOfCards = whatThePage === "main" ? 1 : 3;
  }

  console.log("NumOfCards", NumOfCards);
  return NumOfCards;
}

function generateArrOfCards() {
  JSON.forEach((el) => {
    cards.push(new CreateCard(el).generateCard());
  });
}

// generate48ElArr();
// sliderPagesPattern();
