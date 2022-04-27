import JSON from "../../assets/pets.json";
import { generate48ElArr } from "../functions/Generate48ElArr";
import { generateArrOfSliderPagesPattern } from "../functions/SliderPagesPattern";
import { CreateCard } from "./CreateCards";
import { shuffleArr } from "../functions/Shuffle";

// const WINDOW_WIDTH = document.documentElement.clientWidth;
const PK_WINDOW_WIDTH = 1280;
const TABLE_WINDOW_WIDTH = 768;
const MOBILE_WINDOW_WIDTH = 320;
const SLIDER_PAGES_CONTAINERS = document.querySelectorAll("div.slider");
const CAROUSEL = document.querySelector("#carousel");
const BTN_LEFT = document.querySelector("button.btn-left");
const BTN_RIGHT = document.querySelector("button.btn-right");
const BTN_LEFT_MOBILE = document.querySelector("button.btn-left-mobile");
const BTN_RIGHT_MOBILE = document.querySelector("button.btn-right-mobile");
const BTN_START = document.querySelector("button.btn-start");
const BTN_END = document.querySelector("button.btn-end");
const BTN_PAGE = document.querySelector("button.btn-page");

let whatThePageOfSite;
let lastPage;
let pattern;
let fragmentsCache;
let currentPages;
let isBtnStartOrEnd;
let cards = [];
let isFirstTime = true;

export function createSlider(page) {
  // * receives info about the page from page's js file
  whatThePageOfSite = page;

  generateAndCacheArrOfHTMLCards();
  pattern = generateArrOfSliderPagesPattern(
    calcNumOfCardsOnPage(),
    generate48ElArr()
  );
  insertPages();
  CAROUSEL.addEventListener("animationend", addListenerToCarouselEnd());
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);

  if (whatThePageOfSite === "main") {
    BTN_LEFT_MOBILE.addEventListener("click", moveLeft);
    BTN_RIGHT_MOBILE.addEventListener("click", moveRight);
  } else {
    BTN_START.addEventListener("click", moveStart);
    BTN_END.addEventListener("click", moveEnd);
  }
}

// * return numOfCards depending on the width of site without scrollbar (exclude main page with constant 3 cards)
function calcNumOfCardsOnPage() {
  let NumOfCards;
  let windowWidth = document.documentElement.clientWidth;

  if (whatThePageOfSite === "pets") {
    if (windowWidth >= PK_WINDOW_WIDTH) {
      NumOfCards = 8;
    } else if (
      TABLE_WINDOW_WIDTH <= windowWidth &&
      windowWidth < PK_WINDOW_WIDTH
    ) {
      NumOfCards = 6;
    } else if (
      MOBILE_WINDOW_WIDTH <= windowWidth &&
      windowWidth < TABLE_WINDOW_WIDTH
    ) {
      NumOfCards = 3;
    }
  } else {
    NumOfCards = 3;
  }

  lastPage = 48 / NumOfCards - 1;
  whatThePageOfSite === "pets"
    ? (currentPages = [null, 0, 1])
    : (currentPages = [lastPage, 0, 1]);

  // TODO
  return NumOfCards;
}

// * Cache generated HTML cards in the "cards" arr
function generateAndCacheArrOfHTMLCards() {
  JSON.forEach((el) => {
    cards.push(new CreateCard(el).generateCard());
  });
}

function insertPages() {
  currentPages.forEach((page, id) => {
    if (page === null) return;
    if (whatThePageOfSite === "pets") {
      insertFragmentsToPagesContainer(pattern[page], page, id);
    } else {
      insertFragmentsToPagesContainer(pattern[page], page, id);
    }
  });
  isFirstTime = false;
}

function insertFragmentsToPagesContainer(patternOfPage, page, id) {
  SLIDER_PAGES_CONTAINERS[id].innerHTML = "";
  SLIDER_PAGES_CONTAINERS[id].append(
    generateSlideFragmentWithCards(patternOfPage, page)
  );
}

// * Creates page fragments if they are needed
function generateSlideFragmentWithCards(patternOfPage, page) {
  let fragment = document.createDocumentFragment();

  if (whatThePageOfSite === "pets") {
    // * Create a Cache for fragments Cache
    if (isFirstTime) fragmentsCache = [...Array(lastPage)];

    if (!fragment[page]) {
      patternOfPage.forEach((el) => {
        fragment.append(cards[el].cloneNode(true));
      });
      // TODO
      fragmentsCache[page] = fragment;
    }

    return fragmentsCache[page] /* .cloneNode(true) */;
  } else {
    patternOfPage.forEach((el) => {
      fragment.append(cards[el].cloneNode(true));
    });
    return fragment;
  }
}

function moveLeft() {
  CAROUSEL.classList.add("move-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
  if (whatThePageOfSite === "main") {
    BTN_LEFT_MOBILE.removeEventListener("click", moveLeft);
    BTN_RIGHT_MOBILE.removeEventListener("click", moveRight);
  }
}

function moveRight() {
  CAROUSEL.classList.add("move-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
  if (whatThePageOfSite === "main") {
    BTN_LEFT_MOBILE.removeEventListener("click", moveLeft);
    BTN_RIGHT_MOBILE.removeEventListener("click", moveRight);
  }
}

function moveStart() {
  isBtnStartOrEnd = true;
  // BTN_START.removeEventListener("click", moveStart);
  currentPages = [0, 0, 1];
  insertPages();
  if (whatThePageOfSite === "pets") BTN_PAGE.innerHTML = currentPages[1] + 1;
  BTN_LEFT.disabled = true;
  BTN_START.disabled = true;
  BTN_RIGHT.disabled = false;
  BTN_END.disabled = false;
  CAROUSEL.classList.add("move-left");
}

function moveEnd() {
  isBtnStartOrEnd = true;
  currentPages = [lastPage - 1, lastPage, lastPage];
  insertPages();
  if (whatThePageOfSite === "pets") BTN_PAGE.innerHTML = currentPages[1] + 1;
  BTN_RIGHT.disabled = true;
  BTN_END.disabled = true;
  BTN_LEFT.disabled = false;
  BTN_START.disabled = false;
  CAROUSEL.classList.add("move-right");

  // BTN_END.removeEventListener("click", moveStart);
}

// TODO MAIN
function addListenerToCarouselEnd() {
  const listener = (animationEvent) => {
    if (!isBtnStartOrEnd) {
      switch (animationEvent.animationName) {
        case "move-left":
        case "move-left-table":
        case "move-left-mobile":
        case "move-left-pets":
        case "move-left-pets-table":
        case "move-left-pets-mobile":
          CAROUSEL.classList.remove("move-left");
          whatThePageOfSite === "pets"
            ? changeCurrentPagesPets("left")
            : changeCurrentPagesMain("left");
          break;
        case "move-right":
        case "move-right-table":
        case "move-right-mobile":
        case "move-right-pets":
        case "move-right-pets-table":
        case "move-right-pets-mobile":
          CAROUSEL.classList.remove("move-right");
          whatThePageOfSite === "pets"
            ? changeCurrentPagesPets("right")
            : changeCurrentPagesMain("right");

          break;
      }

      insertPages();
      if (whatThePageOfSite === "pets")
        BTN_PAGE.innerHTML = currentPages[1] + 1;
      BTN_LEFT.addEventListener("click", moveLeft);
      BTN_RIGHT.addEventListener("click", moveRight);
      if (whatThePageOfSite === "main") {
        BTN_LEFT_MOBILE.addEventListener("click", moveLeft);
        BTN_RIGHT_MOBILE.addEventListener("click", moveRight);
      }
    } else {
      isBtnStartOrEnd = undefined;
      CAROUSEL.classList.remove("move-left");
      CAROUSEL.classList.remove("move-right");
    }
  };

  return listener;
}

function changeCurrentPagesPets(direction) {
  let leftPage, currPage, rightPage;

  if (direction === "left") {
    switch (currentPages[1]) {
      case 1:
        BTN_LEFT.disabled = true;
        BTN_START.disabled = true;
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [null, currPage - 1, rightPage - 1];
        break;
      default:
        BTN_RIGHT.disabled = false;
        BTN_END.disabled = false;
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [
          leftPage - 1,
          currPage - 1,
          rightPage === null ? lastPage : rightPage - 1,
        ];
    }
  } else {
    switch (currentPages[1]) {
      case lastPage - 1:
        BTN_RIGHT.disabled = true;
        BTN_END.disabled = true;
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [leftPage + 1, currPage + 1, null];
        break;
      default:
        BTN_LEFT.disabled = false;
        BTN_START.disabled = false;
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [
          leftPage === null ? 0 : leftPage + 1,
          currPage + 1,
          rightPage + 1,
        ];
    }
  }
  // console.log(currentPages);
}

function changeCurrentPagesMain(direction) {
  let leftPage, currPage, rightPage;

  if (direction === "left") {
    switch (currentPages[1]) {
      case 0:
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [leftPage - 1, (currPage = lastPage), rightPage - 1];
        break;
      case 1:
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [(leftPage = lastPage), currPage - 1, rightPage - 1];
        break;
      case lastPage:
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [leftPage - 1, currPage - 1, (rightPage = lastPage)];
        break;
      default:
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [leftPage - 1, currPage - 1, rightPage - 1];
    }
  } else {
    switch (currentPages[1]) {
      case lastPage - 1:
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [leftPage + 1, currPage + 1, (rightPage = 0)];
        break;
      case lastPage:
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [leftPage + 1, (currPage = 0), rightPage + 1];
        break;
      case 0:
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [(leftPage = 0), currPage + 1, rightPage + 1];
        break;
      default:
        [leftPage, currPage, rightPage] = currentPages;
        currentPages = [leftPage + 1, currPage + 1, rightPage + 1];
    }
  }
  // console.log(currentPages);
}
