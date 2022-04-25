import "../../styles/style.scss";

import { listenCardToCreatePopup } from "../../script/components/Popup";
import { addListenerToBurgerBtn } from "../../script/components/Burger";

window.onload = function () {
  listenCardToCreatePopup();
  addListenerToBurgerBtn();
};
