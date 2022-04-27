import JSON from "../../assets/pets.json";
import { CreatePopupCard } from "../../script/components/CreatePopupCard";

let createdCards = [];
let lastInsertedCard;

const listenCardToCreatePopup = () => {
  let sliderContainer = document.querySelector(".slider-listener");
  sliderContainer.addEventListener("click", (e) => {
    let card = e.target.closest(".slider__slide");
    if (!card) return;
    if (!sliderContainer.contains(card)) return;

    let cardId = card.getAttribute("data-id");

    showPopup(cardId);
  });
};

function showPopup(cardId) {
  let popup = getPopupWrapper(cardId, lastInsertedCard);

  if (!createdCards[cardId]) {
    createAndCacheCard(cardId);
  }

  insertCreatedCardToPopup(cardId, popup, lastInsertedCard);
  toggleStyles(popup);
  listenToClosePopup(popup);
}

function createAndCacheCard(id) {
  createdCards[id] = new CreatePopupCard(JSON[id]).generatePopupCard();
}

function insertCreatedCardToPopup(id, popup) {
  popup.append(createdCards[id].cloneNode(true));
  lastInsertedCard = id;
}

function getPopupWrapper(id) {
  let popup = document.querySelector("#popup");
  if (id !== lastInsertedCard) {
    popup.innerHTML = "";
  }
  return popup;
}

function toggleStyles(popup) {
  popup.classList.toggle("_open");
  document.querySelector("html").classList.toggle("_no-scroll");
}

function listenToClosePopup(popup) {
  let popupClose = document.querySelector(".popup__close");
  popup.addEventListener("click", event(popup));

  // * inspects hover
  popupClose.onmouseover = popupClose.onmouseout = btnStylesHandler;
}

function btnStylesHandler(event) {
  let popupBtn = document.querySelector("#popup__btn");

  if (event.type == "mouseover") {
    popupBtn.classList.add("hover-btn");
  }
  if (event.type == "mouseout") {
    popupBtn.classList.remove("hover-btn");
  }
}

function event(popup) {
  const eventHandler = (e) => {
    if (
      e.target.classList.contains("popup__close") ||
      e.target.classList.contains("popup__btn")
    ) {
      toggleStyles(popup);
      popup.removeEventListener("click", eventHandler);
    }
  };
  return eventHandler;
}

export { listenCardToCreatePopup };
