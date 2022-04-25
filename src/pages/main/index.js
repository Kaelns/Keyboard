import "../../styles/style.scss";

import { listenCardToCreatePopup } from "../../script/components/Popup";
import { addListenerToBurgerBtn } from "../../script/components/Burger";
import { createSlider } from "../../script/components/Slider";

window.onload = function () {
  // alert(
  //   "Hi, whoever you are, give me one more day because there's not much left)"
  // );
  addListenerToBurgerBtn();
  listenCardToCreatePopup();
  createSlider("main");
};
