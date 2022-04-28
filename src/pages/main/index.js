import "../../styles/style.scss";

import { listenCardToCreatePopup } from "../../script/components/Popup";
import { addListenerToBurgerBtn } from "../../script/components/Burger";
import { createSlider } from "../../script/components/Slider";

window.onload = function () {
  // alert(
  //   "Hi, please, if there are any problems - leave your nickname in the cross check or write to me in the discord Kaeln #1774"
  // );
  addListenerToBurgerBtn();
  listenCardToCreatePopup();
  createSlider("main");
};
