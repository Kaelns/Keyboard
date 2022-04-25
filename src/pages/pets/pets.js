import "../../styles/style.scss";

import { listenCardToCreatePopup } from "../../script/components/Popup";
import { addListenerToBurgerBtn } from "../../script/components/Burger";
import { createSlider } from "../../script/components/Slider";

window.onload = function () {
  listenCardToCreatePopup();
  addListenerToBurgerBtn();
  createSlider("pets");
};
